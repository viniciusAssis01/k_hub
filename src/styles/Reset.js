import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: 2px solid transparent;
        color: var(--grey-0);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 11px 20px;
        border-radius: 4px;
    }

    ul,ol{
        list-style: none;
    }
    input{
        border: 2px solid transparent;
    }
    input:hover{
        border: 2px solid transparent;
    }
    input:focus{
        border: 2px solid transparent;
    }
    textarea{
        resize: none;
    }

`;
