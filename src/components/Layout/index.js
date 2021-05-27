// import { PromiseProvider } from 'mongoose'
import React from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader'

export default function Layout(props) {
    return (
        <div>
            <Header />
            <MenuHeader />
            {props.children}
        </div>
    )
}
