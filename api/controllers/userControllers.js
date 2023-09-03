
import createError from "../../client/src/utils/createError.js";
import pool from '../models/postgres.js';
import { findUserQuery } from "../models/userQueries/userQueries.js";

const log = (message)=>{
    return console.log(message)
}

export const createUser = async (req, res, next) => {
    try {
      const bodyValues =[req.body.email, req.body.password]

      const { rows } = await pool.query(findUserQuery, bodyValues);

      console.log(rows);
  
      if (rows.length === 0) {
        return next(createError(409, "Invalid Credentials"));
      }
  
      return res.status(200).json("Logged In Succesfully")
  
    } catch (error) {
      console.error(error);
      next(createError(500, "Something Went Wrong"));
    }
  };
  