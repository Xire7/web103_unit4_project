import { pool } from "../config/database.js";


// get is the read
const getCustomCars = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM customcars order by id asc"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get (singular) is the read
const getCustomCar = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM customcars WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// post is the create
const createCustomCar = async (req, res) => {
  try {
    const results = await pool.query(
      "INSERT INTO customcars (name, exterior, roof, wheels, interior) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.name,
        req.body.exterior,
        req.body.roof,
        req.body.wheels,
        req.body.interior,
      ]
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// patch is the update
const patchCustomCar = async (req, res) => {
    try {
        const reqdata = req.body;
        const results = await pool.query(
            "UPDATE customcars SET name=$1, exterior=$2, roof=$3, wheels=$4, interior=$5 WHERE id=$6 RETURNING *",
            [
                reqdata.name,
                reqdata.exterior,
                reqdata.roof,
                reqdata.wheels,
                reqdata.interior,
                req.params.id
            ]
        );
        response.status(200).json(results.rows);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// delete is.. well the delete XD.

const deleteCustomCar = async (req, res) => {
    try {
        const results = await pool.query("DELETE FROM customcars WHERE id=$1", [
            req.params.id
        ]);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export default {
    getCustomCars,
    getCustomCar,
    createCustomCar,
    patchCustomCar,
    deleteCustomCar
}