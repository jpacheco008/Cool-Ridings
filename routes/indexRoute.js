const { Router } = require("express")
const productsRouter = require("./productsRoute");
const usersRouter = require("./usersRoute");

const router = Router();

router.get("/", (req, res) => res.send("API Root"))

router.use("/", usersRouter);
router.use("/products", productsRouter);

module.exports = router
