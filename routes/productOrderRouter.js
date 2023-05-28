const Router = require("express")
const router = new Router()
const productOrderContoller = require("../controllers/productOrderController")

router.post("/", productOrderContoller.createProductOrder)


module.exports = router