import React from 'react';

function RoofModal({fetch}) {
    const [selectedRoof, setSelectedRoof] = React.useState('');

    const handleRoofSelection = (roofType) => {
        setSelectedRoof(roofType);
        fetch(roofType);
    };

    return (
        <div>
            <h2>Select a roof type:</h2>
            <ul>
                <li onClick={() => handleRoofSelection('sunroof')}>Sunroof</li>
                <li onClick={() => handleRoofSelection('moonroof')}>Moonroof</li>
                <li onClick={() => handleRoofSelection('panoramic')}>Panoramic Roof</li>
            </ul>
            <p>You have selected: {selectedRoof}</p>
        </div>
    );
}

export default RoofModal;
