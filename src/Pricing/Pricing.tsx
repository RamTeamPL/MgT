import './Pricing.css'
import { useState } from 'react';

function Benefity() {
    return (
        <>
            <span>Plusy ktore </span>
            <ul>
                <li>Dupa andrzeja</li>
                <li>TANIA CENA</li>
                <li>Dupa Weroniki</li>
                <li>TANIE JAK U PIOTRA</li>
                <li>99,999999% uptime</li>
            </ul>
        </>
    )
}

<<<<<<< Updated upstream
=======
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


>>>>>>> Stashed changes

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
            <p>Cena za miesiac: {cena}zł</p>
            <span>Wymiar: </span>
            <select onChange={oblicz}>
<<<<<<< Updated upstream
=======
                <option disabled selected value=""> -- WYBIERZ --</option>
>>>>>>> Stashed changes
                <option value="month">Miesięczny</option>
                <option value="roczny">Roczny</option>
            </select>
        </div>
        </main>
    )
}

export default Pricing
