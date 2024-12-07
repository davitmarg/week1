import { useState } from 'react'
import Name from "./components/name.jsx"
import ChosenNames from "./components/chosenNames.jsx"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #a2c6d8
    }
`;

function random(max) {
    return Math.floor(Math.random() * max);
}

function randomNumber(min, max) {
    return min + random(max - min + 1);
}

function chooseRandom(arr) {
    return arr[random(arr.length)];
}

const names = [
    "Gyago", "Sophia", "Jackson", "Olivia", "Liam", "Emma",
    "Noah", "Ava", "Lucas", "Isabella", "Oliver",
    "Mia", "Ethan", "Amelia", "Aiden", "Harper",
    "Elijah", "Evelyn", "James", "Charlotte", "Benjamin",
    "Abigail", "William", "Emily", "Alexander", "Madison",
    "Michael", "Elizabeth", "Mason", "Sofia", "Logan",
    "Avery", "Matthew", "Ella", "Daniel", "Scarlett",
    "Henry", "Grace", "Joseph", "Lily", "Samuel", "Hayk",
    "Chloe", "Robert", "Victoria", "Carter", "Riley",
    "Wyatt", "Aria", "Jayden", "Zoey", "Gabriel", "Davit", 
    "Hamlet", "Manuel", "Nilank", "Akriti", "Nigger", "Brenda"
    ]

function App() {
    const [remainingNames, setRemainingNames] = useState([...names])
    const [chosenNames, setChosenNames] = useState([]);
    const [currentName, setCurrentName] = useState(chooseRandom(remainingNames))



    const yesHandler = () => {
        setChosenNames((prevItems) => [...prevItems, currentName]);
        const newRemainingNames = [...remainingNames].filter((name) => name != currentName);
        setRemainingNames(newRemainingNames);
        setCurrentName(chooseRandom(remainingNames));
    }

    const noHandler = () => {
        const newRemainingNames = [...remainingNames].filter((name) => name != currentName);
        setRemainingNames(newRemainingNames);
        setCurrentName(chooseRandom(remainingNames));
    }

    const maybeHandler = () => {
        setCurrentName(chooseRandom(remainingNames));
    }

    return <>
        <GlobalStyle/>
        <Name name={currentName} onYes={yesHandler} onNo={noHandler} onMaybe={maybeHandler}/>
        <ChosenNames names={chosenNames}></ChosenNames>
    </>
}

export default App
