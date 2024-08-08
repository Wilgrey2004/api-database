const express = require("express");

const MatematicasC = require("../module/cursosMatematicas.js");
const routerM = new express.Router();

//get
routerM.get("/api/cursos/matematicas", async (req, res) => {
  try {
    const CursosP = await MatematicasC.find();
    res.status(200).send(CursosP);
  } catch (e) {
    console.log(e);
  }
});

routerM.get("/api/cursos/matematicas/:tema", async (req, res) => {
  const tema = req.params.tema;

  try {
    const cursosFiltrados = await programacionC.find({ tema: tema });

    if (cursosFiltrados.length === 0) {
      return res
        .status(404)
        .send("No se encontraron cursos para el tema especificado.");
    }

    res.status(200).send(cursosFiltrados);
  } catch (error) {
    res.status(400).send(error);
  }
});

routerM.get("/api/cursos/matematicas/:titulo", async (req, res) => {
  const tema = req.params.titulo;

  try {
    const cursosFiltrados = await programacionC.find({ titulo: titulo });

    if (cursosFiltrados.length === 0) {
      return res
        .status(404)
        .send("No se encontraron cursos para el titulo especificado.");
    }

    res.status(200).send(cursosFiltrados);
  } catch (error) {
    res.status(400).send(error);
  }
});

//post
routerM.post("/api/cursos/matematicas", async (req, res) => {
  const nuevoCurso = new MatematicasC(req.body);
  console.log("Registro insertado...");
  try {
    await nuevoCurso.save();
    res.status(201).send(nuevoCurso);
  } catch (error) {
    res.status(400).send(error);
  }
});

//put
routerM.put("/api/cursos/matematicas/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  const datosActualizados = req.body;

  try {
    const cursoActualizado = await MatematicasC.findByIdAndUpdate(
      idCursoP,
      datosActualizados,
      { new: true }
    );
    if (!cursoActualizado) {
      return res.status(404).send("Curso no encontrado");
    }
    res.status(200).send(cursoActualizado);
    console.log(`registro ${req.params._id} alterado...`);
  } catch (error) {
    res.status(400).send(error);
  }
});

//patch

routerM.patch("/api/cursos/matematicas/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  const datosActualizados = req.body;

  try {
    const cursoActualizado = await MatematicasC.findByIdAndUpdate(
      idCursoP,
      { $set: datosActualizados },
      { new: true }
    );

    if (!cursoActualizado) {
      return res.status(404).send("Curso no encontrado");
    }
    console.log(`registro ${req.params._id} alterado...`);
    res.status(200).send(cursoActualizado);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete

routerM.delete("/api/cursos/matematicas/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  try {
    const cursoEliminar = await MatematicasC.findByIdAndDelete(idCursoP);

    if (!cursoEliminar) {
      res.status(404).send(`no se encontro el curso con el id ${idCursoP}`);
    }

    res.status(200).send("Curso eliminado correctamente");
    console.log(`registro ${idCursoP} eliminado...`);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = routerM;
