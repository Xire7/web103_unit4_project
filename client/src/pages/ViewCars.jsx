import React from 'react'
import '../App.css'
import CustomCarsAPI from '../services/CustomCarsAPI'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewCars = () => {
    const [cars, setCars] = useState([]);
    return (
        <div>
            poop 
        </div>
    )
}

export default ViewCars


export const loadCars = async (request, response) => {
    try {
        const cars = await CustomCarsAPI.getAllCars();
        const carData = await cars.json();
        return carData;
    } catch (err) {
        response.status(500).json({ error: err });
    }
}