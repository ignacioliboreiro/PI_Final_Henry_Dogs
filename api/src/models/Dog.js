const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type : DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    height:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    weight:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    life_span:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
  })
}