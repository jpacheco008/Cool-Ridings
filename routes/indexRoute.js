const { Router } = require("express")
const productsRouter = require("./products");
const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("API Root"))

router.use("/", usersRouter);
router.use("/products", productsRouter);

module.exports = router
