import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions';
import "./style.css"



export default function MenuHeader() {

    const category=useSelector(state=>state.category);
    const dispatch = useDispatch();
    

    useEffect(() => {
       dispatch(getAllCategory());
    }, [])

    const renderCategories = (categories) => {
        const myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.parentId ? <a href={"/"+category.slug}>{category.name}</a>:<span>{category.name}</span>}
                    {category.children.length ? <ul>{renderCategories(category.children)}</ul> : null}
                </li>
            )
        }
        return myCategories;
    }

    

    return (
        <div className="menuHeader">

        <ul>
            {category.categories?renderCategories(category.categories):null}
        </ul>
            
        </div>
    )
}
