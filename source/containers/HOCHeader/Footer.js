/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import Link from "next/link";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';
import {SiMaildotru} from 'react-icons/si';
import {TbPhoneCall} from 'react-icons/tb';
import {MdLocationOn} from 'react-icons/md';
import {SiAparat} from 'react-icons/si';
import PageTitle from "../PageTitle";

const footerSectionCSS = css`
  color: #919191;
  background-color: #343434;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const footerLogoCSS = css`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    width: 100%;

    > * {
      margin-bottom: 1rem;
      justify-content: center;
    }
  }

  img {
    width: 100px;
    height: 100px;
    @media (max-width: 768px) {
      width: 75px;
      height: 75px;
    }
    @media (max-width: 600px) {
      width: 65px;
      height: 65px;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    color: ${Variable.actionBtnBg};
    font-size: 3.5rem;
    margin-right: 2rem;
    font-weight: bold;
    @media (max-width: 1200px) {
      width: 60%;
    }
    @media (max-width: 998px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;

    div {
      margin-right: 0;
    }
  }
`
const callUs = css`
  width: 90%;
  background-color: #4b4b4b;
  border-radius: ${Variable.radius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1.5em;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
const rightSideCallUs = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  font-size: 2rem;

  a {
    display: flex;
    align-items: center;
    color: #919191;
    margin: 0 !important;

    span {
      color: #919191;
      margin-right: .5rem;
      font-size: .7em;
      @media (max-width: 992px) {
        width: 70%;
        white-space: nowrap;
        font-size: .5em;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
    }

    &:hover > * {
      color: #dadada;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 90%;
  }
`
const divider = css`
  width: 2px;
  height: 40px;
  background-color: #dadada;
  margin-right: 20px;
  margin-left: 15px;
  @media (max-width: 1200px) {
    display: none;
  }
`
const leftSideCallUs = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    justify-content: space-evenly;
    width: 80%;

  }

  > a {
    text-decoration: none;
    color: #919191;
    display: flex;
    align-items: center;

    &:hover > * {
      color: #dadada;
    }

    > * {
      font-size: 2rem;
    }
  }
`
const linksFooterCSS = css`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    margin: 2rem auto;
  }

  a {
    text-decoration: none;
    color: #919191;
    padding: 5px 0;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    text-align: center;
    margin: auto .5rem;

    &:hover {
      color: #dadada;
    }

    @media (max-width: 768px) {
      font-size: .8rem;
    }
  }
`
const description = css`
  width: 90%;
  text-align: justify;
  border-top: 2px solid #919191;
  padding-top: 10px;
  color: #919191;
  font-weight: 500;

`
const licenseCSS = css`
  font-size: .8rem;
  text-align: justify;
  margin-top: 2rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`
const otherCompaniesTitle=css`
width: 90%;
  margin: auto;
  color: #fafafa;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`
const otherCompanies = css`
  width: 90%;
  margin: 1rem auto ;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    cursor: pointer;
    width: 180px;
    height: 180px;
    transition: .5s;
    @media (max-width: 992px) {
      width: 120px;
      height: 120px; 
    }
    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 600px) {
      width: 80px;
      height: 80px;
    }

    &:hover {
      transform: scale(1.2);
    }

  }
`

function Footer() {

    return (
        <React.Fragment>


            <div css={footerSectionCSS}>
                <h3 css={otherCompaniesTitle}>سایر خدمات ما</h3>
                <div css={otherCompanies}>
                    <Link href="#">
                        <img src={'/img/logos/appStar.png'} alt="appStar logo"/>
                    </Link>
                    <Link href="#">
                        <img src={'/img/logos/iranTarakonesh.png'} alt="iranTarakonesh logo"/>
                    </Link>
                    <Link href="#">
                        <img src={'/img/logos/rondtarin.png'} alt="rondtarin logo"/>
                    </Link>
                    <Link href="#">
                        <img src={'/img/logos/setare40.png'} alt="setare40 logo"/>
                    </Link>
                    <Link href="#">
                        <img src={'/img/logos/starOne.png'} alt="starOne logo"/>
                    </Link>
                </div>
                {/*<div css={footerLogoCSS}>*/}
                {/*    <img src={'/img/01 - SetareAval.png'} alt="setarePay logo"/>*/}
                {/*</div>*/}
                <div css={callUs}>
                    <div css={rightSideCallUs}>
                        <a href={"tel:+989195032756"}>
                            <TbPhoneCall/>
                            <span>93 11 900 0919</span>
                        </a>
                        <span css={divider}/>
                        <a target={"blank"}
                           href={"https://www.google.com/maps/place/%D8%B3%D8%AA%D8%A7%D8%B1%D9%87+%DB%8C%DA%A9%E2%80%AD/@35.7797165,51.3743237,19z/data=!4m5!3m4!1s0x3f8e077df52d20bb:0xb41d4b97fc84bc2c!8m2!3d35.7796364!4d51.3750377"}>
                            <MdLocationOn/>
                            <span>سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲</span>
                        </a>
                    </div>
                    <div css={leftSideCallUs}>
                        <a href={"mailto:info@setarepay.ir"}> <SiMaildotru/> </a>
                        <a href="#"> <BsWhatsapp/> </a>
                        <a href="#"> <BsInstagram/> </a>
                        <a href="#"> <SiAparat/> </a>
                    </div>
                </div>
                <div css={linksFooterCSS}>
                    <Link href="/"><a>صفحه اصلی</a></Link>
                    <Link href="/requestGateway"><a>درخواست درگاه</a></Link>
                    <Link href="/blog"><a>بلاگ</a></Link>
                    <Link href="/rules"><a>قوانین و مقررات</a></Link>
                    <Link href="/"><a>نمونه قرارداد</a></Link>
                    <Link href="/faq"><a>سوالات متداول</a></Link>
                    <Link href="/"><a>مستندات توسعه</a></Link>
                    <Link href="/contactUs"><a>تماس با ما</a></Link>
                    <Link href="/aboutUs"><a>درباره ما</a></Link>
                </div>
                <p css={description}>
                    از مهم‌ترین اهداف شرکت ستاره پی می‌توان به ایجاد درگاه پرداخت الکترونیکی هوشمند، کوتاه نمودن چرخه
                    دریافت قبوض و تسریع در روند وصول مطالبات، راحت‌ترین و سریع‌ترین روش خرید شارژ مشترکین اعتباری به
                    صورت الکترونیکی و لحظه‌ای و توسعه و تنوع محصول با تحلیل نیاز مشترکین، اشاره کرد . فعالیت های این
                    شرکت منجر به حذف واسطــــه و توسعه فروش انواع محصولات همراه اول از جمله شارژ فوق العاده، بانوان،
                    جوانان، وفاداری، دلخواه، مستقیم و شارژ اضطراری، انواع بسته‌های مختلف اینترنتی و پرداخت قبوض شده
                    است .
                </p>
                <div css={licenseCSS}>تمامی حقوق این سایت مربوط به شرکت ستاره اول می باشد.</div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
