/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState,} from "react";
import Link from "next/link";
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1
  }
  35% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }

`
const mainNews = css`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.bgNews};
  overflow: hidden;
  padding: 10px 20px;
  @media (max-width: 768px) {
    display: none;
  }
`
const newsClass = (onSlide) => css`
  display: ${onSlide ? "block" : "none"};
  text-align: center;
  animation: ${animation} 2s ease-in-out;
`
const newsLinkClass = css`
  color: ${Variable.fontColor};
  font-size: .8rem;
  cursor: pointer;
`


function News() {
    let news = [
        "براحتی و تنها با چند کلیک، صفحه پرداخت سایت خود را در ستاره پی بسازید.",
        "هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران در ستاره پی هستیم.",
        "ثبت نام عضو حقیقی و حقوقی، چند درگاهی، تسهیم حساب، واکنشگرا، تسویه روزانه",
        "ستاره پی با مجوز رسمی از شاپرک و دارای نماد اعتماد الکترونیکی.",
        "درگاه امن ستاره پی، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.",
        "استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، تنوع سرویس‌ در حوزه پرداخت الکترونیک با ستاره پی.",
    ]
    const [slide, setSlider] = useState(1)
    const autoShowSlides = () => {
        (slide < news.length - 1) ? setSlider(slide + 1) : setSlider(0)
    }

    useEffect(() => {
        setTimeout(autoShowSlides, 6000)
    })

    return (
        <React.Fragment>
            <div css={mainNews}>
                {news.map((item, index) =>
                    <div key={index} css={newsClass(index === slide)}>
                        <Link href="#">
                            <a css={newsLinkClass}>{item}</a>
                        </Link>
                    </div>)}
            </div>
        </React.Fragment>
    )
        ;
}

export default News;
