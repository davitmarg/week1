
import CustomButton from "./customButton.jsx"
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;


const NameItem = styled.h1`
  width: auto;
  color: white;
  font-size: 1.875rem; 
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out forwards;
  opacity: 0;
`;

export default function Name({name, onYes, onNo, onMaybe}){
    return (
    <div className="bg-slate-600 rounded-3xl ml-auto mr-auto w-[280px] h-auto mt-[30px] flex flex-col px-[20px] py-[20px]">
        {(name && <>
            <NameItem key={name}>{name}</NameItem>
            <div className="w-full h-[30px] flex flex-row mt-[20px] mb-[10px]">
                <CustomButton onClick={onYes}>Yes</CustomButton>
                <CustomButton onClick={onNo} color={"#ed4561"} hoverColor={"#94193e"}>No</CustomButton>
                <CustomButton onClick={onMaybe} color={"#bdb028"} hoverColor={"#8a742b"}>Maybe</CustomButton>
            </div>
        </>)}
        {(!name && <p className="ml-auto mr-auto mt-[10px] mb-[10px] text-center text-xl text-white">Out of names for now</p>)}
    </div>)
}