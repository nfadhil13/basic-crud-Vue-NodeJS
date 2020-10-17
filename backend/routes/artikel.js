const express = require("express");
const { body } = require("express-validator");

const artikelController = require("../controllers/artikel");

const router = express.Router();


router.get("/get/:id", artikelController.findArtikelByID);

router.get("/list", artikelController.getArtikel);

router.post("/delete",[

 ],
 artikelController.deleteArtikelByID)

router.post("/update",
  [
    body('title').trim().isLength({min:5}),
    body('content').trim().isLength({min:10})
  ],
  artikelController.updateArtikel
)

router.post(
  "/post",
  [
    body("username").trim().isLength({min:1}),
    body('title').trim().isLength({min:1}),
    body('content').trim().isLength({min:1})
  ],
  artikelController.createArtikel
);

router.use((err, req ,res , next) => {
  const message = err.message;
  if(!err.statusCode){
    err.statusCode = 500
  }
  const status = err.statusCode;
   res.status(status).json({
     meesage : message,
     status : 'error'
   });
});

module.exports = router;
