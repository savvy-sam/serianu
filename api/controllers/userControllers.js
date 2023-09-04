
import pool from '../models/postgres.js';
import { findUserQuery } from "../models/userQueries/userQueries.js";
import createError from '../utils/createError.js';

const log = (message)=>{
    return console.log(message)
}

export const loginUser = async (req, res, next) => {
    try {
      const bodyValues =[req.body.email, req.body.password]

      const { rows } = await pool.query(findUserQuery, bodyValues);

      if (rows.length === 0) {
        return next(createError(401, "Your credentials were wrong!!"));
      }
  
      return res.status(200).json("You have successfully logged in!!")
  
    } catch (error) {
      log(error);
      next(createError(500, "Something Went Wrong. Try Again Later"));
    }
  };
  