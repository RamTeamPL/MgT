import { useEffect, useState } from 'react';
import './LoadingScreen.css'
import { Page } from '../MainPage/MainPage';


function LoadingScreen({setPage}) {
    let [dots, setDots] = useState(".");
    let dotCount = 1;

    useEffect(() => {
        setTimeout(() => {
            setPage(Page.MyQuizzes)
        }, Math.random() * 2000 + 1000)
        setInterval(() => {
            if (dotCount >= 4) dotCount = 1;
            dotCount++;
            let string = "";
            for(let i = 1; i < dotCount; i++) {
                string += ".";
            }
            setDots(string);
            
        }, 500)
    }, [])

    return (
        <div id="loadingscreen">
            <img src="./src/assets/running.gif"/><br />
            <span>Loading{dots}</span>
        </div>
    )
}

export default LoadingScreen;
