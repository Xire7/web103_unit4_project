import React from 'react';

const ExteriorModal = ({fetch}) => {
    const [selectedExterior, setSelectedExterior] = React.useState('');

    const handleExteriorChange = (event) => {
        setSelectedExterior(event.target.value);
        fetch(event.target.value);
    };

    return (
        <div>
            <label htmlFor="exterior-select">Select Exterior:</label>
            <select id="exterior-select" value={selectedExterior} onChange={handleExteriorChange}>
                <option value="">--Please choose an exterior--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
    );
};

export default ExteriorModal;
