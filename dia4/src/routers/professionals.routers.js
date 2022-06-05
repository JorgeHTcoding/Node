const {Router} = require ("express")
const router = Router();
const professionalsCtrl = require("../controller/professionals.controller")

router.get("/", professionalsCtrl.getStart);

router.get("/professionals", professionalsCtrl.getProfessionals);

router.get("/professionals/?id=", professionalsCtrl.getProfessionals);

router.post("/professionals",  professionalsCtrl.postProfessionals);

router.put("/professionals/",  professionalsCtrl.putProfessionals);

router.delete("/professionals",  professionalsCtrl.deleteProfessionals)

module.exports = router;