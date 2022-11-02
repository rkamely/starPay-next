/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../source/constants/FixVariables';
import HeaderAndFooter from "../../source/hoc/HeaderAndFooter";
import PageTitle from "../../source/containers/PageTitle";
import ZItems from "../../source/containers/ZItems";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from 'next/head'


function HomeServicePage() {
    const services = css`
      margin: 4em auto;
      
      @media (max-width: 768px) {
        margin-top: 6em;
      }
    `

    return (

        <React.Fragment>
            <Head>
                <title>سرویس ها</title>
            </Head>
            {/*<HeaderAndFooter content={*/}
                <div css={services}>
                    <PageTitle title={"سرویس ها"}/>
                    <Link href="services/safeGateway1">
                        <a>
                            <ZItems direction={'row'} title={"درگاه پرداخت اینترنتی "}
                                    subTitle={'درگاهی امن و بدون قطعی'}
                                    content={'این سرویس به شما کمک می‌کند که پایه کدهای مربوط به کیف پول، ایجاد، شارژ و جابه‌جایی مبالغ بین کیف پول‌ها را پیاده‌سازی نکنید و صرفا با استفاده از وب‌سرویس (API) های ما زیرساخت کیف پول را به صورت کامل به سیستم خود متصل کرده و زمان تیم توسعه‌دهنده خود را به چالش های واقعی کسب‌وکار خود اختصاص دهید و با خیال راحت مدیریت امور مالی و پرداخت‌های کسب‌وکار خود را به ما بسپارید.'}
                                    image={"./img/payment.png"} altImage={'payment'}/>
                        </a>
                    </Link>
                    <Link href="services/safeGateway2">
                        <a>
                            <ZItems direction={'row-reverse'} title={"درگاه پرداخت اینترنتی "}
                                    subTitle={'درگاهی امن و بدون قطعی'}
                                    content={'این سرویس به شما کمک می‌کند که پایه کدهای مربوط به کیف پول، ایجاد، شارژ و جابه‌جایی مبالغ بین کیف پول‌ها را پیاده‌سازی نکنید و صرفا با استفاده از وب‌سرویس (API) های ما زیرساخت کیف پول را به صورت کامل به سیستم خود متصل کرده و زمان تیم توسعه‌دهنده خود را به چالش های واقعی کسب‌وکار خود اختصاص دهید و با خیال راحت مدیریت امور مالی و پرداخت‌های کسب‌وکار خود را به ما بسپارید.'}
                                    image={"./img/payment2.png"} altImage={'payment'}/>
                        </a>
                    </Link>
                    <Link href="services/safeGateway3">
                        <a>
                            <ZItems direction={'row'} title={"درگاه پرداخت اینترنتی "}
                                    subTitle={'درگاهی امن و بدون قطعی'}
                                    content={'این سرویس به شما کمک می‌کند که پایه کدهای مربوط به کیف پول، ایجاد، شارژ و جابه‌جایی مبالغ بین کیف پول‌ها را پیاده‌سازی نکنید و صرفا با استفاده از وب‌سرویس (API) های ما زیرساخت کیف پول را به صورت کامل به سیستم خود متصل کرده و زمان تیم توسعه‌دهنده خود را به چالش های واقعی کسب‌وکار خود اختصاص دهید و با خیال راحت مدیریت امور مالی و پرداخت‌های کسب‌وکار خود را به ما بسپارید.'}
                                    image={"./img/payment3.png"} altImage={'payment'}/>
                        </a>
                    </Link>
                </div>
            {/*}/>*/}
        </React.Fragment>
    );
}

export default HomeServicePage;
