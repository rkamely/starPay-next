/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../constants/FixVariables';
import ManagerEmailBox from "./ManagerEmailBox";

const emailAddress = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: inherit;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }

  > *:hover {
    box-shadow: ${Variable.boxShadow};
  }
`

function ContactManagers() {

    return (
        <React.Fragment>
            <div css={emailAddress}>
                <ManagerEmailBox position={"مدیریت عامل"}
                                 managerName={"آقای محمد جواد صدوقی"} email={"mj.sadooghi@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت بازاریابی و فروش"}
                                 managerName={"آقای بهنام کلهر"} email={"b.kalhor@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت سرمایه انسانی "}
                                 managerName={"آقای محمد جواد کربلایی"} email={"mj.karbalaii@setareaval.ir"}/>
                <ManagerEmailBox position={"معاونت مالی و اداری"}
                                 managerName={"آقای سعید باغشاهی"} email={"s.baghshahi@setareaval.ir"}/>
                <ManagerEmailBox position={"مدیریت روابط عمومی"}
                                 managerName={"آقای حسین صالحی‌فرد"} email={"h.salehifard@setareaval.ir"}/>
            </div>
        </React.Fragment>
    );
}

export default ContactManagers;
