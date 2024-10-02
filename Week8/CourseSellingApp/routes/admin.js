const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middlewares/admin");

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  try {
    await adminModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    console.log("Your Signup has failed");
  }
  res.json({
    message: "signup succeeded",
  });
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect Credentials",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId: adminId,
  });
  res.json({
    message: "Course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    }
  );
  res.json({
    message: "Course Updated",
    courseId: course._id,
  });
});

adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const courses = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    message: "Your Course request",
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
