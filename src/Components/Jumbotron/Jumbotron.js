import React, { Component } from 'react';
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import HeroImage from "../../Assets/hero-image.jpg";

const Styles = styled.div`
    .jumbo {
        background: url(${HeroImage}) no-repeat top;
        background-size: cover;
        color: white;
        height: 300px;
        position: relative;
        z-index: -2;
        display: flex;
        align-items: center;
    }

    .overlay {
        background-color: black;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .text-container{
        margin: 0 auto; 
        text-align: center;
        z-index: 1;
    }
`;

export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="text-container">
                        <h1>College Safe</h1>
                        <p>Wow, this college is safe!</p>
                    </div>
                    <div className="overlay">

                    </div>
                </Jumbo>
            </Styles>
        );
    }
}
