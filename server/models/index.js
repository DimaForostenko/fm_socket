const fs = require('fs');
const path = require("path");
const mongoose = require("mongoose");
const { basename } = require('path');
const config = require("../configs").db[process.env.NODE_ENV||"development"];

const baseName = path.basename(__filename);
mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`);

const db={};

fs.readdirSync(__dirname)
   .filter((file) => file !== basename && /.js$/i.test(file))
   .forEach((file) => {
      const model = require(file);
      db[model.modelName]=model;
   });

   model.exports=db;