import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function CategoriesProducts() {
    const [category, setCategory] = useState()
    const { category_id } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/category/get-category/${category_id}`).then(categoryObj=>{
            
        }).catch(e=>console.log(e.message))
    }, [])

    return (
        <div>
            <div id="category-desciption">
                {/* <h5>{category.product_category_name}</h5> */}
            </div>
        </div>
    )
}
