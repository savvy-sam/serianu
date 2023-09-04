import createError from "../utils/createError.js";
import { loginSchema } from "../validations/loginSchema.js";

export const validateLogin= (req, res, next)=>{

    const { error } = loginSchema.validate(req.body);

    if (error) {
      return next(createError(400, "Invalid Data"))
    }

    next();
  }
  
  