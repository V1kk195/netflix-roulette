import * as React from "react";
import './App.css';
import CorgiImg from '../../public/assets/corgi.jpg';

export const App = () => {
    console.log(CorgiImg);

    return (
        <div className="app">
            <h1>Hello React!</h1>
            <img src={CorgiImg} alt="corgi"/>
        </div>
    );
}