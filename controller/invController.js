const invModel = require("../model/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

async function buildById(req, res, next) {
  const inv_id = req.params.inv_id;
  const vehicleData = await invModel.getVehicleById(inv_id);
  const vehicleHTML = utilities.buildVehicleHTML(vehicleData);
  res.render("inventory/detail", {
    title: `${vehicleData.make} ${vehicleData.model}`,
    message: null,
    vehicleHTML
  });
}

async function triggerError(req, res, next) {
  throw new Error("Intentional 500 error for testing");
}

module.exports = { buildById };
module.exports = invCont
