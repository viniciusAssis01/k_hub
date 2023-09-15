import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
    .title1{
        font-family: 'Inter', sans-serif;
        font-weight:700;
        font-size: 1.1419rem; /* 18.27px */
        line-height: 1.7763rem;
    }
    .title2{
        font-family: 'Inter', sans-serif;
        font-weight:600;
        font-size: 1.015rem;/* 16.24px */
        line-height: 1.6494rem;
    }
    .title3{
        font-family: 'Inter', sans-serif;
        font-weight:700;
        font-size: 0.8881rem;/* 14.21px */
        line-height: 1.5225rem;
    }
    .text1{
        font-family: 'Inter', sans-serif;
        font-weight:400;
        font-size: 0.7612rem;/* 12.18px */
        line-height: 1.3956rem;
    }
    .text2{
        font-family: 'Inter', sans-serif;
        font-weight:600;
        font-size: 0.7612rem;/* 12.18px */
        line-height: 1.1419rem;
    }
    .text3{
        font-family: 'Inter', sans-serif;
        font-weight:400;
        font-size: 0.7612rem;/* 12.18px */
        font-style: italic;
        line-height: 1.1419rem;
    }
`;
