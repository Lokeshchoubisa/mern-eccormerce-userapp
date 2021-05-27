import React from 'react'
import Layout from '../../components/Layout'

export default function BuyNowPage(props) {
    return (
        <>
         <Layout />
         <p>buy now</p>
         <p>{props.name}</p>
        
        </>
    )
}
