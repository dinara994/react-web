import React from "react";
import './Main.css'
import Card from "./Card";

const Main = () => {
    return (
        <div className='main'>
            <div className="main-info">
                <h1 className='title'>Shop</h1>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore
                    et
                    dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-3">
                    <Card />
                </div>
            </div>
        </div>
    )
}
export default Main
