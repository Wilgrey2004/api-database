const mongoose = require("mongoose");

const cursosProgramacion = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },

  lenguaje: {
    type: String,
    required: true,
    trim: true,
  },

  vistas: {
    type: Number,
   
    default: 0,
  },

  nivel: {
    type: String,
    required: true,
    trim: true,
  },
});

const programacionC = mongoose.model("CursosProgramacion", cursosProgramacion);

module.exports = programacionC;
