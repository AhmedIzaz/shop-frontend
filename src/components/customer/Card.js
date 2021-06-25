import React, { useState, useEffect } from 'react'


export default function Card(props) {

    const [products, setProducts] = useState([])

    const clicked = () => {
        products.push(props.id)
    }

    return (
        <div>
            <button onClick={clicked}>Add to card</button>
        </div>
    )
}
