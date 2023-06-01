import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use!");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });

  // const newUser = new User({ name, email, password });

  // try {
  //   await newUser
  //     .save()
  //     .then(() => {
  //       res.status(StatusCodes.OK).json({
  //         user: {
  //           email: newUser.email,
  //           lastName: newUser.lastName,
  //           location: newUser.location,
  //           name: newUser.name,
  //         },
  //         token,
  //         location: newUser.location,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // } catch (error) {
  //   console.log(error);
  // }
};

const login = (req, res) => {
  res.send("Login user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
