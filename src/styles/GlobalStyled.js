import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyle = {
  color: "blue",
  fontSize: "26px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    
    *{
        box-sizing: border-box;
    }
    a{
      text-decoration: none;
    }
`;
