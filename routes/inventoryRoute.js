// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controller/invController")
const utilities = require("../utilities/");
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

router.get("/trigger-error", utilities.handleErrors(invController.triggerError));

router.get("/detail/:inv_id", utilities.handleErrors(invController.buildById));
module.exports = router;