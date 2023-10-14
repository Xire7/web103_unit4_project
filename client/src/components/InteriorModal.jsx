import React, { useState } from 'react';

const InteriorMenu = ({fetch}) => {
    const [selectedInterior, setSelectedInterior] = useState('');

    const handleInteriorSelect = (interior) => {
        setSelectedInterior(interior);
        fetch(interior);
    };

    return (
        <div>
            <h2>Select Interior</h2>
            <button onClick={() => handleInteriorSelect('Leather')}>Leather</button>
            <button onClick={() => handleInteriorSelect('Cloth')}>Cloth</button>
            <button onClick={() => handleInteriorSelect('Suede')}>Suede</button>
            <p>Selected Interior: {selectedInterior}</p>
        </div>
    );
};

export default InteriorMenu;
