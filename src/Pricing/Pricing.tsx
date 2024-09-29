import './Pricing.css'
import { useState } from 'react';

function Benefity() {
    return (
        <>
            <h1>Plusy ktore </h1>
            <div>
            <ul>
                <li>Dupa andrzeja</li>
                <li>TANIA CENA</li>
                <li>Dupa Weroniki</li>
                <li>TANIE JAK U PIOTRA</li>
                <li>99,999999% uptime</li>
            </ul>
            </div>
        </>
    )
}

function THEPRICE({cena}) {
    return (
        <>
            <p id="cena">
                <span class="star">⭐</span>
                {cena}zł
                <span class="star">⭐</span>
            </p>
        </>
    )
}



function Pricing() {
    let [cena, setCena] = useState("0");
    let oblicz = (e) => {
        switch (e.target.value) {
            case "month":
                setCena("19.99")
                break;
            case "roczny":
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
