import React, { Component } from 'react';
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import HeroImage from "../../Assets/hero-image.jpg";

const Styles = styled.div`

    .jumbo {
        background: url(${HeroImage}) no-repeat top;
        background-size: 2000px;
        position: relative;
        color: #333
        height: 450px;
        display: flex;
        align-items: center;
    }

    
    @media screen and (max-width: 990px) {
        .jumbo {
          height: 300px;
          background-size: 1000px;
        }
      }

    .overlay {
        background-color: white;
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .text-container{
        margin: 0 auto; 
        text-align: center;
        z-index: 1;
    }

    h1{
        font-size: 2.5rem;
        text-transform: uppercase;
        padding: 1rem;
        font-weight: 600;
    }
    h5{
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 100;
    }

    button{
        width: 120px;
        height: 40px;
        background-color: #edac57;
        color: white;
        border: 0;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
        border-radius: 0px;
        
        &:hover {
            cursor: pointer;
          }

    }
`;

export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
                <Jumbo fluid className="jumbo">

                    <div className="overlay"></div>
                    <div className="text-container">
                        <h5>Wow, this college is safe!</h5>
                        <h1>College Safe</h1>

                        <button type="button" class="">Join</button>
                    </div>


                </Jumbo>
            </Styles>
        );
    }
}
