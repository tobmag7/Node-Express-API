// module.exports = app => {
const express = require("express");
const {
  signUp,
  getUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/acc-holder.controller");
const router = express.Router();


// Create a new account
/**
 * @POST request to signup users
 */
router.post("/signup", signUp);

/**
 * @GET request to get all users
 */
router.get("/accounts", getUsers);

/**
 * @GET request to single user
 */

router.get("/account/:id", getUser);

/**
 * @DELETE request to delete a single user
 */

router.delete("/account/:id", deleteUser);

/**
 * @PUT request to delete a single user
 */

router.put("/account/:id", editUser);



module.exports = router;
