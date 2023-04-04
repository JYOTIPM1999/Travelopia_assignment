const TravellerModel = require("../models/travellers.Scheme");

const registerTravellers = async (req, res) => {
  const { name, email, place, numberofTravellers, budgetPerPerson, total } =
    req.body;
  const existUser = await TravellerModel.findOne({ email });
  if (existUser) {
    res.send("User already existed");
  } else {
    const user = await TravellerModel.create({
      name,
      email,
      place,
      numberofTravellers,
      budgetPerPerson,
      total,
    });
    await user.save();
    res.status(200).send("Data successfully saved");
  }
};

module.exports = registerTravellers;
