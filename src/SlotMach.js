import React from 'react'
import './App.css'

const SlotMach = (props) => {
    const { x, y, z } = props;
    if ((x === y) && (y === z)) {
        return (
            <div className='inner_slot'>
                <h1>{x} {y} {z}</h1>
                <h2>This is Matching</h2>
                <hr />
            </div>
        )
    } else {
        return (
            <div className='inner_slot'>
                <h1>{x} {y} {z}</h1>
                <h2>This is not Matching</h2>
                <hr />
            </div>
        )
    }
}

export default SlotMach
