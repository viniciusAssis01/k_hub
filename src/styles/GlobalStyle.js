import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary-0: #FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;
  
        --grey-4:#121214;
        --grey-3:#212529;
        --grey-2:#343B41;
        --grey-1:#868E96;
        --grey-0:#F8F9FA; 

        --toast-error: #E83F5B;
        --toast-sucess:#3FE864;
    }

    body{
        width: 100%;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4);
        color: var(--grey-0);
    }
`;
