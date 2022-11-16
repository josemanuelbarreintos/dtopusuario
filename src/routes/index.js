const router = require("express").Router();

router.get("/",(req,res) => {
    res.send("Bienvenido a DTOP")
})

router.use("/personas", require("./persona"));
router.use("/usuario", require("./usuario"));

module.exports = router;
