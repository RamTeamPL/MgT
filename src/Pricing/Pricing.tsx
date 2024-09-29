import './Pricing.css'
import { useState } from 'react';

function Benefity() {
    return (
        <>
            <h1>Subscription </h1>
            <div>
            <ul>
                <li>Dostęp do wszystkich funkcji</li>
                <li>Wsparcie twórców</li>
            </ul>
            </div>
        </>
    )
}

function THEPRICE({cena}) {
    return (
        <>
            <p id="cena">
                <span className="star">⭐</span>
                {cena}zł
                <span className="star">⭐</span>
            </p>
        </>
    )
}



function Pricing() {
    let [cena, setCena] = useState("0");
    let oblicz = (e) => {
        switch (e.target.value) {
            case "month":
                document.querySelector("#pricing").style = "background-color: rgb(20, 20, 20);";
                setCena("19.99")
                break;
            case "roczny":
                document.querySelector("#pricing").style = "background-color: #78620A";
                setCena("7.70")
        }
    }

    return (
        <main>
        <div id="pricing">
            <Benefity />
            <span>Wymiar: </span>
            <select onChange={oblicz}>
                <option disabled selected value> -- WYBIERZ --</option>
                <option value="month">Miesięczny</option>
                <option value="roczny">Roczny</option>
            </select>
            <hr/>
            <p>Cena za miesiac: </p>
            {
                cena != "0" ?
                    <THEPRICE cena={cena}/>
                : ""
            }
        </div>
        </main>
    )
}

export default Pricing
