/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../constants/FixVariables';


const zItems = (direction) => css`
  width: 70%;
  display: flex;
  flex-direction: ${direction};
  justify-content: space-between;
  align-items: center;
  border-radius: 2em;
  padding: 2rem;
  margin: 2.5rem auto;
  box-shadow: ${Variable.boxShadow};
  min-height: 400px;

  > * {
    margin: auto 1em;
  }

  p {
    font-size: 1em;
  }

  img {
    width: 25%;
    height: 180px;
    @media (max-width: 998px) {
      width: 30%;

    }
    @media (max-width: 768px) {
      align-self: center;
      width: auto;
      height: 250px;
      margin-bottom: 3rem;

    }
  }
 
  h5 {
    white-space: nowrap;
  }

  h6 {
    color: ${Variable.placeholderColor};
    margin-bottom: 1.5em;
  }

  p {
    margin-top: 1em;
    color: ${Variable.navFontColor};

  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }

`


function Services({direction, title, subTitle, content, image, altImage}) {


    return (

        <React.Fragment>
            <div css={zItems(direction)}>
                <img src={image} alt={altImage}/>
                <div>
                    <h5>{title}</h5>
                    <h6>{subTitle}</h6>
                    <p>{content}</p>
                </div>
            </div>
        </React.Fragment>

    )
        ;
}

export default Services;
