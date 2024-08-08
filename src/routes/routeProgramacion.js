const express = require("express");

const programacionC = require("../module/cursosProgramacion");
const routerP = new express.Router();

//get
routerP.get("/api/cursos/programacion", async (req, res) => {
  try {
    const CursosP = await programacionC.find();
    res.status(200).send(CursosP);
  } catch (e) {
    console.log(e);
  }
});

routerP.get("/api/cursos/programacion/:lenguaje", async (req, res) => {
  const lenguaje = req.params.lenguaje;

  try {
    const cursosFiltrados = await programacionC.find({ lenguaje: lenguaje });

    if (cursosFiltrados.length === 0) {
      return res
        .status(404)
        .send("No se encontraron cursos para el lenguaje especificado.");
    }

    res.status(200).send(cursosFiltrados);
  } catch (error) {
    res.status(400).send(error);
  }
});

routerP.get("/api/cursos/programacion/:titulo", async (req, res) => {
  const titulo = req.params.titulo;

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
routerP.post("/api/cursos/programacion", async (req, res) => {
  const nuevoCurso = new programacionC(req.body);
  console.log("Registro insertado...");
  try {
    await nuevoCurso.save();
    res.status(201).send(nuevoCurso);
  } catch (error) {
    res.status(400).send(error);
  }
});

//put
routerP.put("/api/cursos/programacion/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  const datosActualizados = req.body;

  try {
    const cursoActualizado = await programacionC.findByIdAndUpdate(
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

routerP.patch("/api/cursos/programacion/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  const datosActualizados = req.body;

  try {
    const cursoActualizado = await programacionC.findByIdAndUpdate(
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

routerP.delete("/api/cursos/programacion/:_id", async (req, res) => {
  const idCursoP = req.params._id;
  try {
    const cursoEliminar = await programacionC.findByIdAndDelete(idCursoP);

    if (!cursoEliminar) {
      res.status(404).send(`no se encontro el curso con el id ${idCursoP}`);
    }

    res.status(200).send("Curso eliminado correctamente");
    console.log(`registro ${idCursoP} eliminado...`);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = routerP;
