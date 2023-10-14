import React, { useState } from 'react';

const WheelMenu = ({fetch}) => {
    const [selectedWheel, setSelectedWheel] = useState('');

    const handleWheelSelect = (Wheel) => {
        setSelectedWheel(Wheel);
        fetch(Wheel);
    };

    return (
        <div>
            <h2>Select Wheels</h2>
            <button onClick={() => handleWheelSelect('Standard')}>Standard</button>
            <button onClick={() => handleWheelSelect('Off-Road')}>Off-Road</button>
            <button onClick={() => handleWheelSelect('Sport')}>Sport</button>
            <p>Selected Wheel: {selectedWheel}</p>
        </div>
    );
};

export default WheelMenu;
