/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import News from "../containers/HOCHeader/News";
import Header from "../containers/HOCHeader/Header";
import Footer from "../containers/HOCHeader/Footer";
import {css} from "@emotion/react";


export default function HeaderAndFooter({content}) {

    return (
        <main css={hoc}>
            <News/>
            <Header/>
            {content}
            <Footer/>
        </main>
    )
}
const hoc = css`
 overflow: hidden;

`
