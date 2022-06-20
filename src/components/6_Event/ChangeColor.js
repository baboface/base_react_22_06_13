import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: ${(props) => props.bgColor}; */
  background-color: ${(props) => props.bg};
`;

// export const ChangeColor = () => {
//   const [color, setColor] = useState("gold");
//   const handleColor = () => {
//     setColor("black");
//   };
//   return <Box bgColor={color} onClick={handleColor} />;
// };

export const ChangeColor = () => {
  const [color, setColor] = useState("salmon");
  return <Box bg={color} onClick={() => setColor("white")} />;
};

const [color,setColor] = useState("white")
return <Box bg={color} onClick={() => setColor("red")}>
