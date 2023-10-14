import { pool } from "./database.js";
import carInfo from "../data/carInfo.js";

const createCarsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS customcars;
  
      CREATE TABLE IF NOT EXISTS customcars (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          exterior TEXT NOT NULL,
          roof TEXT NOT NULL,
          wheels TEXT NOT NULL,
          interior TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("customcars table has been created successfully");
  } catch (err) {
    console.error("⚠️ error creating customcars table", err);
  }
};

const seedCarTable = async () => {
  await createCarsTable();
  carInfo.forEach((element)=>{
      const insertQuery = {
          text: "INSERT INTO customcars (name, exterior, roof, wheels, interior) VALUES ($1, $2, $3, $4, $5)",
      };
      const values = [
          element.name,
          element.exterior,
          element.roof,
          element.wheels,
          element.interior
      ];
      pool.query(insertQuery, values, (err, res) => {
          if (err) {
              console.log(err.stack) 
          } else {
              console.log(`${element.name} added successfully`)
          }
      });
  })
}

console.log("poop");
seedCarTable();