import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const MenuBar = styled.div`
  font-size: 18px;
`;

export const Header = () => {
  return (
    <Bar>
      <MenuBar>
        <Link to="/">로고</Link>
      </MenuBar>
      <MenuBar>
        <Link to="/intro">메뉴1</Link>
      </MenuBar>
      <MenuBar>
        <Link to="/Product">메뉴2</Link>
      </MenuBar>
    </Bar>
  );
};
