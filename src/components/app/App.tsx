import * as React from "react";
import styled from "styled-components";

import './App.css';
import { Header } from "../header";
import {Footer} from "../footer";
import {Main} from "../main";


export const App = () => {
    const App = styled.div`
      background-color: #232323;
      max-width: 1200px;
      margin: 0 auto;
    `;

    return (
        <App className='app'>
            <Header />
            <Main />
            <Footer />
        </App>
    );
}