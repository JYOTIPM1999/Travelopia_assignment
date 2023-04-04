const TravellerModel = require("../models/travellers.Scheme");

const registerTravellers = async (req, res) => {
  const { name, email, place, numberofTravellers, budgetPerPerson, total } =
    req.body;

  console.log(name, email, place, numberofTravellers, budgetPerPerson, total);
  try {
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
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getData = async (req, res) => {
  try {
    let data = await TravellerModel.find();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { registerTravellers, getData };
