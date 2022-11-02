/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useEffect} from "react";
import {jsx, css, Global} from '@emotion/react'
import * as Variable from '../source/constants/FixVariables';
import VideoHomePage from "../source/containers/HomePage/VideoHomePage";
import Services from "../source/containers/HomePage/Services/Services"
import Slogan from "../source/containers/Slogan"
import Features from "../source/containers/HomePage/Features/Features";
import Head from 'next/head'


const backgroundHome = css`
  background-image: ${Variable.backgroundColor};
`

function Index() {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>ستاره پی</title>
            </Head>
                <main css={backgroundHome}>
                <VideoHomePage/>
                <Services/>
                <Slogan title={"ستاره پی همراه کسب و کار آنلاین شما"}
                        description={"به خانواده‌ی 50 میلیونی ستاره اول بپیوندید"}
                        height={"400px"}/>
                <Features/>
            </main>
        </React.Fragment>
    );
}

export default Index;
