const Account = require("../models/acc-holder.models");

module.exports = {
  signUp: async (req, res) => {
    try {
      const { fullname, email, gender, address, account_type } = req.body;
      if ((!fullname || !email || !gender || !address, !account_type)) {
        res.status(400).json({ error: "all fields are required" });
      } else {
        let account = await Account.findOne({ email });
        if (account) {
          res.status(400).json({ error: "acount exists already" });
        } else {
          let account = await Account.create({
            fullname,
            email,
            gender,
            address,
            account_type,
          });
          res.status(201).json(account);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  getUsers: async (req, res) => {
    try {
      let account = await Account.find();
      if (!account) {
        res.status(404).json({ error: "no account found" });
      } else {
        res.status(200).json(account);
      }
    } catch (error) {
      console.log(error);
    }
  },
  getUser: async (req, res) => {
    try {
      let account = await Account.findById({ _id: req.params.id });
      if (!account) {
        res.status(404).json({ error: "account does not exist" });
      } else {
        res.status(200).json(account);
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let account = await Account.findById({ _id: req.params.id });
      if (!account) {
        res.status(404).json({ error: "account does not exist" });
      } else {
        account = await Account.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ msg: `account deleted successfully` });
      }
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (req, res) => {
    try {
      let account = await Account.findById({ _id: req.params.id });
      if (!account) {
        res.status(404).json({ error: "account deleted successfully" });
      } else {
        account = await Account.findByIdAndUpdate(
          { _id: req.params.id },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(201).json(account);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
