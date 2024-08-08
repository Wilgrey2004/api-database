const mongoosee = require("mongoose");

const host = "localhost";
const post = "27017";
const database = "InfoCursoss";

const uri = `mongodb://${host}:${post}/${database}`;

mongoosee.connect(uri);
