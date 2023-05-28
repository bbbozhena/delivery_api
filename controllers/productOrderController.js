const { ProductOrder, Order, Product } = require("../models/models");

class ProductOrderContoller {
    async createProductOrder(req, res) {
        try {
          const { customerName, items } = req.body;
          
          const order = await Order.create()
          const products = await Product.findAll({
            where: {
                id: items.map(item => item.id)
            }
          });
          order.setProducts(products);
    
          return res.status(201).json(order);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal Server Error' });
        }
      }
    
}

module.exports = new ProductOrderContoller();