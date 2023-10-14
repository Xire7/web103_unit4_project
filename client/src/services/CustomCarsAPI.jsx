const baseURL = "http://localhost:3000";

const getAllCars = async () => {
    try {
        const response = await fetch(`${baseURL}/api/customcars`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const getCarById = async (id) => {
    try {
        const response = await fetch(`${baseURL}/api/customcars/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

const createCar = async (formData) => {
    try {
        const response = await fetch(`${baseURL}/api/customcars`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (err ) {
        console.log(err);
    }
};

const updateCar = async (id, formData) => {
    try {
        const response = await fetch(`${baseURL}/api/customcars/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteCar = async (id) => {
    try {
        const response = await fetch(`${baseURL}/api/customcars/${id}`, {
            method: "DELETE"
        })
    } catch (err) {
        console.log(err);
    }
};

export default {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}