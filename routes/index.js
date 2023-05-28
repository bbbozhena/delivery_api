const Router = require("express")
const router = new Router()
const restaurantRouter = require("./restaurantRouter")
const productRouter = require("./productRouter")
const productOrderRouter = require("./productOrderRouter")

router.use("/restaurant", restaurantRouter)
router.use("/product", productRouter)
router.use("/product_order", productOrderRouter)


module.exports = router