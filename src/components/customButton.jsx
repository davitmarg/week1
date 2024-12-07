import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color || "#4caf50"};
  color: white;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#45a049"};
  }
`;

export default function CustomButton({ color, hoverColor, onClick, children }) {
  return <StyledButton color={color} hoverColor={hoverColor} onClick={onClick}>{children}</StyledButton>;
}
