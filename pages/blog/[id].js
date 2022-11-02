/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {useRouter} from "next/router";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../source/constants/FixVariables';
import Link from "next/link";
import Head from 'next/head'


function PostPage() {
    const postPage = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 2em auto;
      @media (max-width: 768px) {
        margin-top: 6em;
        width: 100%;

      }

      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;

        > div {
          display: flex;
          flex-direction: column;


          span {
            color: ${Variable.placeholderColor};
            font-size: .9em;
          }
        }

        section {
          height: 300px;
          overflow: hidden;
          width: 100%;
          border-radius: ${Variable.radius};
          @media (max-width: 768px) {
            height: 200px;

          }

          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }
      }
    `
    const postContent = css`
      width: 70%;
      margin: 3em auto;

      h4 {
        margin: 1em 0;
        @media (max-width: 768px) {
          font-size: 1em;

        }
      }

      img {
        height: 400px;
        width: 80%;
        margin: 2em auto;
        display: flex;
        object-fit: cover;
        border-radius: ${Variable.radius};
        @media (max-width: 768px) {
          height: 150px;
          width: 100%;

        }
      }

      li {
        color: ${Variable.navFontColor};
        font-size: 1.3em;
        font-weight: 600;
        margin: 1.5em 1em 1.5em 0;
        @media (max-width: 768px) {
          font-size: .8em;
        }
      }

      a {
        text-decoration: none;
        color: ${Variable.navFontColor};
        font-weight: 1000;
      }
    `
    const suggestionSection = css`
      display: flex;
      flex-direction: column;
      width: 80%;

      > h6 {
        border-bottom: ${Variable.border};
        margin-bottom: 1em;
        padding: 1em;
      }

      > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;

      }
    `
    const suggestionPost = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 2em auto;
      cursor: pointer;
      width: 20%;
      height: 200px;
      @media (max-width: 992px) {
        width: 40%;
      }

      &:hover {
        >section {
          transform: scale(.95);
          img {
            transform: scale(1.2);
          }
        }
      }

      > section {
        overflow: hidden;
        border-radius: ${Variable.radius};
        width: 100%;
        height: 200px;
        transition: 1s;

        img {
          width: 100%;
          height: 100%;
          transition: .5s;
          object-fit: cover;
        }


      }

      > div {
        width: 100%;
        padding: 0 .5em;

        span {
          color: ${Variable.placeholderColor};
          font-size: .8em;
        }
      }
    `
    const router = useRouter()

    const {id} = router.query
    return (

        <React.Fragment>
            <Head>
                <title>{id}</title>
            </Head>
                <main css={postPage}>
                    <header>
                        <section>
                            <img src='/img/blog5.jpg' alt='blog'/>
                        </section>
                        <div>
                            <h1> عنوان مقاله</h1>
                            <span>تگ مقاله</span>
                            <span>تاریخ انتشار</span>
                        </div>
                    </header>
                    <section css={postContent}>
                        <p>اینستاگرام در سالهای اخیر به یکی از محبوب ترین شبکه های اجتماعی برای به اشتراک گذاری عکس‌ها و
                            ویدیوها با دوستان و خانواده و همچنین ایجاد و تبلیغ کسب و کارها تبدیل شده است.شما در
                            اینستاگرام اطلاعات زیادی دارید و با افرادی زیادی نیز در ارتباط هستید و نباید اطلاعات مهم و
                            خصوصی شما منتشر شود،پس نیاز است که <Link href="#"><a>بیشتر از هر سرویس
                                آنلاین</a></Link> دیگری که استفاده می‌کنید به ایمن
                            شدن فضای اینستاگرام خود کمک کنید. محافظت از حریم خصوصی و ایجاد امنیت در اینستاگرام، هم برای
                            حساب شخصی و هم برای حساب تجاری، یکی از مهم ترین کارهایی است که باید پس از ایجاد اکانت
                            اینستاگرام انجام دهید چرا که همواره افراد سودجود در کمین هستند تا به طریقی از شما مبلغی برای
                            برگرداندن پیج یا فعال کردن آن دریافت کنند. در این مقاله 7 راهکار ارزشمند برای بالا بردن
                            امنیت اینستاگرام بیان می‌شود، با ما همراه باشید.</p>
                        <h4>چگونه امنیت پیج اینستاگرام را بالا ببریم؟ </h4>
                        <p>به طور کلی کاربران باید دانش خود را در زمینه استفاده از فضای اینستاگرام و حفظ امنیت
                            اینستاگرام افزایش دهند. زیرا که حریم خصوصی و حفظ امنیت، به نحوه استفاده مردم از رسانه‌های
                            اجتماعی و دانش آنها بستگی دارد.اینستاگرام به منظور حفظ حریم خصوصی و امنیت پیج کاربران توصیه
                            و راهکارهایی را ارائه داده است که به طور خلاصه می توان به موارد زیر اشاره کرد:</p>
                        <img src="/img/blogPage4.jpg" alt="a"/>
                        <p>عوامل مختلف زیادی در افزایش فروش و بهبود تجربه کاربری تاثیر دارند. طراحی مناسب، استفاده آسان،
                            امکان جستجوی راحت محصول و….. همگی در بهبود تجربه مشتری موثر هستند. اما آنچه که مهم است این
                            است که تجربه کاربری خوب فقط شامل سبد خرید نیست و یکی از مهم‌ترین بخش‌های فروشگاهای اینترنتی
                            که معمولا دست کم گرفته می شود، انتخاب درگاه پرداخت است که می‌تواند تاثیر زیادی بر بهبود
                            تجربه مشتری از فروشگاه آنلاین شما داشته باشد. مشتریان وقتی وارد وب سایت فروشگاه آنلاین می
                            شوند، پس از انتخاب محصول مورد نظر و اطمینان از انتخاب آن وارد مرحله پرداخت هزینه می‌شوند،
                            سپس در این قسمت با وارد کردن اطلاعات مربوط به کارت بانکی از جمله شماره کارت، CVV و تاریخ
                            انقضا، فرآیند پرداخت انجام می شود. اگر طی فرآیند پرداخت، مشتری با کندی وب سایت و سرعت پایین
                            درگاه پرداخت در انتقال به سایت پرداخت مواجه شود، ممکن است از خرید منصرف شده و به کل از صفحه
                            شما خارج شود. این مسئله به تجربه تلخی در ذهن مشتری تبدیل شده و به طور ناخواسته مشتریان شما
                            را کاهش می‌دهد.</p>
                        <h4>درگاه پرداختی که باعث بهبود تجربه مشتری می شود چه ویژگی هایی دارد؟</h4>
                        <img src="/img/blogPage1.jpg" alt="a"/>
                        <p>عوامل مختلف زیادی در افزایش فروش و بهبود تجربه کاربری تاثیر دارند. طراحی مناسب، استفاده آسان،
                            امکان جستجوی راحت محصول و….. همگی در بهبود تجربه مشتری موثر هستند. اما آنچه که مهم است این
                            است که تجربه کاربری خوب فقط شامل سبد خرید نیست و یکی از مهم‌ترین بخش‌های فروشگاهای اینترنتی
                            که معمولا دست کم گرفته می شود، انتخاب درگاه پرداخت است که می‌تواند تاثیر زیادی بر بهبود
                            تجربه مشتری از فروشگاه آنلاین شما داشته باشد. مشتریان وقتی وارد وب سایت فروشگاه آنلاین می
                            شوند، پس از انتخاب محصول مورد نظر و اطمینان از <Link href="#"><a>بیشتر از هر سرویس
                                آنلاین</a></Link>انتخاب آن وارد مرحله پرداخت هزینه می‌شوند،
                            سپس در این قسمت با وارد کردن اطلاعات مربوط به کارت بانکی از جمله شماره کارت، CVV و تاریخ
                            انقضا، فرآیند پرداخت انجام می شود. اگر طی فرآیند پرداخت، مشتری با کندی وب سایت و سرعت پایین
                            درگاه پرداخت در انتقال به سایت پرداخت مواجه شود، ممکن است از خرید منصرف شده و به کل از صفحه
                            شما خارج شود. این مسئله به تجربه تلخی در ذهن مشتری تبدیل شده و به طور ناخواسته مشتریان شما
                            را کاهش می‌دهد.</p>
                        <img src="/img/blogPage1.jpg" alt="a"/>
                        <p>برای بالا بردن امنیت اینستاگرام نیاز نیست حتما با برون سپاری امنیت پیج خود به افراد دیگر،
                            مجبور به پرداخت هزینه شوید. فقط کافی است که دانش خود را در این حوزه افزایش دهید تا مجبور
                            نشوید برای حفظ امنیت اینستاگرام به افرادی که خود را متخصص این حوزه معرفی میکنند و امنیت را
                            یک مسئله فنی و غیر آموزشی معرفی میکنند، اعتماد کنید. این افراد با حداقل تخصص و با انجام
                            نکاتی که خود شبکه های اجتماعی برای افزایش امنیت استفاده می‌کنند، شما را فریب می‌دهند و
                            هزینه‌های هنگفت را به شما تحمیل می‌کنند. ما در اینجا 7 راهکار که اینستاگرام برای بررسی و
                            بهبود امنیت حساب کاربری به همه کاربران توصیه می کند را ارائه می‌کنیم.</p>
                        <h4>پرداخت آنلاین و تجربه خرید مشتری چگونه بهم مرتبط هستند؟</h4>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌دهد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                        <li>درگاه پرداخت اینترنتی و افزایش فروش فروشگاه های آنلاین</li>
                        <img src="/img/blogPage2.jpg" alt="a"/>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌دهد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                        <li>درگاه پرداخت اینترنتی و افزایش فروش فروشگاه های آنلاین</li>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌د<Link href="#"><a>بیشتر از هر سرویس
                                آنلاین</a></Link>هد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                        <li>درگاه پرداخت اینترنتی و افزایش فروش فروشگاه های آنلاین</li>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌دهد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                        <img src="/img/blogPage3.jpg" alt="a"/>
                        <li>درگاه پرداخت اینترنتی و افزایش فروش فروشگاه های آنلاین</li>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌دهد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                        <li>درگاه پرداخت اینترنتی و افزایش فروش فروشگاه های آنلاین</li>
                        <p>اگر مشتریان در خرید کالا و خدمات از فروشگاه آنلاین شما با مشکل مواجه شوند احتمالا به دنبال
                            جایگزینی خواهند بود. یک تجربه خرید عالی با ورود راحت و بی دردسر به وب سایت شما شروع و با
                            پیام “از خرید شما متشکریم” پایان می‌یابد. هر موردی که بر این تجربه تاثیر منفی بگذارد، مانند
                            منوهای شلوغ سایت، فرآیند جستجوی سخت و بی پایان و در نهایت فرآیند پرداخت کند و ضعیف، خطر از
                            دست دادن خریداران بالقوه را افزایش می‌دهد. در واقع درگاه پرداخت ، بخش جدایی ناپذیر از تجربه
                            خرید کلی است. اگر عملکرد درگاه پرداخت شما نامناسب و استفاده از آن مشکل باشد، قابل اعتماد
                            نباشد، شامل تغییر مسیرهای متعدد باشد، می‌تواند مانند هر عنصر دیگری که به طراحی فروشگاه مربوط
                            است، باعث از دست رفتن مشتری شود.</p>
                    </section>
                    <section css={suggestionSection}>
                        <h6>مطالب پیشنهادی</h6>
                        <div>
                            <Link href='/blog/2'>
                                <a css={suggestionPost}>
                                    <section>
                                        <img src='/img/blog.jpg' alt='blog'/>
                                    </section>
                                    <div>
                                        <span>تگ مقاله</span>
                                        <h6> عنوان مقاله</h6>
                                        <span>تاریخ انتشار</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href='/blog/2'>
                                <a css={suggestionPost}>
                                    <section>
                                        <img src='/img/blog2.jpg' alt='blog'/>
                                    </section>
                                    <div>
                                        <span>تگ مقاله</span>
                                        <h6> عنوان مقاله</h6>
                                        <span>تاریخ انتشار</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href='/blog/2'>
                                <a css={suggestionPost}>
                                    <section>
                                        <img src='/img/blog3.jpg' alt='blog'/>
                                    </section>
                                    <div>
                                        <span>تگ مقاله</span>
                                        <h6> عنوان مقاله</h6>
                                        <span>تاریخ انتشار</span>
                                    </div>
                                </a>
                            </Link>
                            <Link href='/blog/2'>
                                <a css={suggestionPost}>
                                    <section>
                                        <img src='/img/blog4.jpg' alt='blog'/>
                                    </section>
                                    <div>
                                        <span>تگ مقاله</span>
                                        <h6> عنوان مقاله</h6>
                                        <span>تاریخ انتشار</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </section>
                </main>
        </React.Fragment>
    );
}

export default PostPage;