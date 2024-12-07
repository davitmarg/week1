import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  background-color: #bbf7d0;
  border-radius: 1.5rem;
  margin: 30px auto;
  width: 200px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
  height: ${(props) => props.height}px;
`;

const NameItem = styled.p`
  width: auto;
  text-align: center;
  font-size: 1.875rem; 
  animation: ${fadeIn} 0.3s ease-out forwards;
  opacity: 0;
`;

export default function ChosenNames({ names }) {
  const [height, setHeight] = useState(200); 

  useEffect(() => {
    const newHeight = 30 + Math.max(30, names.length * 45);
    setHeight(newHeight);
  }, [names]);

  return (
  (names.length && <AnimatedDiv height={height}>
    {names.map((name, index) => (
      <NameItem key={name}>
        {name}
      </NameItem>
    ))}
  </AnimatedDiv>)
  )
}
