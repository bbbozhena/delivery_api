const { Restaurant } = require("../models/models");
const ApiError = require("../error/ApiError");

class RestaurantController {
  async create(req, res) {
    const { name } = req.body;
    const restaurant = await Restaurant.create({ name });
    return res.json(restaurant);
  }

  async getAll(req, res) {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants);
  }
}

module.exports = new RestaurantController();
