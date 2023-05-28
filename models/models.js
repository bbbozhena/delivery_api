const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  created: { type: DataTypes.DATE, defaultValue: sequelize.NOW },
});

const Restaurant = sequelize.define("restaurant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  desc: { type: DataTypes.STRING, allowNull: false },
});

const ProductOrder = sequelize.define("product_order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Restaurant.hasMany(Order);
Order.belongsTo(Restaurant);

Restaurant.hasMany(Product);
Product.belongsTo(Restaurant);

Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });

module.exports = {
  Order,
  Restaurant,
  Product,
  ProductOrder,
};
