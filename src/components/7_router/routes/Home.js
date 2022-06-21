import styled from "styled-components";

const Sibal = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
`;

const Mainbg = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://assets.wpdeveloper.com/2018/09/404.png) no-repeat
    center/cover;
`;

export const Home = () => {
  return (
    <Sibal>
      <Mainbg></Mainbg>
    </Sibal>
  );
};
