import { useState } from "react";
import ExteriorModal from "./ExteriorModal";
import RoofModal from "./RoofModal.jsx";
import WheelsModal from "./WheelsModal";
import InteriorModal from "./InteriorModal";
import CustomCarsAPI from "../services/CustomCarsAPI";



const createCar = async (formData) => {
    console.log(formData);
    try {
        const response = await fetch("http://localhost:3000/api/customcars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

const MenuBar = () => {
  const [getExterior, setExterior] = useState("");
  const [getRoof, setRoof] = useState("");
  const [getWheels, setWheels] = useState("");
  const [getInterior, setInterior] = useState("");


  const [carName, setCarName] = useState("");
  const [showExteriorModal, setShowExterior] = useState(false);
  const [showRoofModal, setShowRoof] = useState(false);
  const [showWheelsModal, setShowWheels] = useState(false);
  const [showInteriorModal, setShowInterior] = useState(false);

  const showExteriorHandler = () => {
    if (showExteriorModal) {
      setShowExterior(false);
      return;
    }
    setShowExterior(true);
  };
  const showRoofHandler = () => {
    if (showRoofModal) {
      setShowRoof(false);
      return;
    }
    setShowRoof(true);
  };
  const showInteriorHandler = () => {
    if (showInteriorModal) {
      setShowInterior(false);
      return;
    }
    setShowInterior(true);
  };
  const showWheelsHandler = () => {
    if (showWheelsModal) {
      setShowWheels(false);
      return;
    }
    setShowWheels(true);
  };

  const handleInputChange = (event) => {
    setCarName(event.target.value);
    return;
  };

  // when submitted this should also get all the data from the combo of exterior, roof, wheels, and interior
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Car name: ${carName}`);
    const formData = {
        name: carName,
        exterior: getExterior,
        roof: getRoof,
        wheels: getWheels,
        interior: getInterior
    }
    console.log(formData);
    createCar(formData);
    setCarName("");
    return;
  };

  return (
    <section>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showExteriorHandler}
          >
            Exterior
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showRoofHandler}

          >
            Roof
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showWheelsHandler}
          >
            Wheels
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showInteriorHandler}
          >
            Interior
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter car name"
              value={carName}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </nav>
      </div>

      {showExteriorModal ? <ExteriorModal fetch={setExterior}/> : ""}
      {showRoofModal ? <RoofModal fetch={setRoof} /> : ""}
      {showWheelsModal ? <WheelsModal fetch={setWheels}/> : ""}
      {showInteriorModal ? <InteriorModal fetch={setInterior} /> : ""}
    </section>
  );
};

export default MenuBar;
