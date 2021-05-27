import React from 'react'
import "./style.css"
export default function SliderImage() {
    return (
        <div>
            <div className="slider">
                {/* <img  src="https://rukminim1.flixcart.com/flap/3376/560/image/1c910fad263a7475.jpg?q=50" /> */}
                <img  src="https://rukminim1.flixcart.com/flap/3376/560/image/9f20106b23521ede.jpg?q=50" srcset="https://rukminim1.flixcart.com/flap/3376/560/image/1c1fe5add7c1069c.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/1c1fe5add7c1069c.jpg?q=50 1x" />
                {/* <img  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" /> */}
            </div>
        </div>
    )
}
