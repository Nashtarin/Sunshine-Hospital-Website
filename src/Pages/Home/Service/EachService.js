import React from 'react';


const EachService = (props) => {
    const { id, name, description, img, floor, cabins, ward, ICU } = props.data

    return (
        <div>
            <h1>It's Service:{name}</h1>
        </div>
    );
};

export default EachService;