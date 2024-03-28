const express = require("express");
const { signIn, signUp, getUserDetails } = require("../controllers/user");
const { isAuthorized } = require("../middleware/isAuthorized");

const router = express.Router();

// User Login
router.post("/signin", signIn);

// User Registration
router.post("/signup", signUp);

// Getting the user Details If already LoggedIn
router.get("/", isAuthorized, getUserDetails);

module.exports = router;
