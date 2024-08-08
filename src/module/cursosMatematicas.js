const mongoose = require("mongoose");

const cursosMatematicas = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },

  tema: {
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

const matematicaC = mongoose.model("CursosMatematicas", cursosMatematicas);

module.exports = matematicaC;
