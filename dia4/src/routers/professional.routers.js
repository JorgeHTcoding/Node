const {Router} = require ("express")
const router = Router();
const professionalCtrl = require("../controller/professional.controller")

router.get("/", professionalCtrl.getStart);

router.get("/professional", professionalCtrl.getProfessional);

router.post("/professional",  professionalCtrl.postProfessional);

router.put("/professional",  professionalCtrl.putProfessional);

router.delete("/professional",  professionalCtrl.deleteProfessional)

module.exports = router;