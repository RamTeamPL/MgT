import { useEffect, useState } from 'react';
import './LoadingScreen.css'
import { Page } from '../MainPage/MainPage';


function LoadingScreen({setPage, setLogged}) {
    let [dots, setDots] = useState(".");
    let dotCount = 1;
    setLogged(false);

    useEffect(() => {
        setTimeout(() => {
            setPage(Page.MyQuizzes);
            setLogged(true);
        }, Math.random() * 1000 + 1000)
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
