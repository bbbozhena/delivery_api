const uuid = require("uuid");
const { Product } = require("../models/models");
const path = require("path");
const ApiError = require("../error/ApiError");

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, desc, restaurantId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".ipg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        img: fileName,
        price,
        desc,
        restaurantId,
      });
      return res.json(product);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    return res.json(product);
  }

  async getAll(req, res) {
    const { restaurantId } = req.query;
    let products;
    if (!restaurantId) {
      products = await Product.findAll();
    }
    if (restaurantId) {
      products = await Product.findAll({ where: { restaurantId } });
    }
    return res.json(products);
  }
}

module.exports = new ProductController();
