import './MyQuizzes.css'
import '../srodekCSS.css'

function Box({src, opis}) {
    return (
        <div class="quizzTile">
            <img src={src}/><br/>
            <hr/>
            <span>{opis}</span>
        </div>
    )
}

function MyQuizzes() {
    return (
        <div>
        <main>
            <div id="quizzes">
                <Box src="./src/assets/quiz1.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz2.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./src/assets/quiz3.png" opis="OPIS"/>
                <Box src="./src/assets/quiz4.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz5.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz6.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz7.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz8.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz10.jpg" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./src/assets/quiz8.jpg" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./src/assets/quiz5.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz6.jpg" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./src/assets/quiz2.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./src/assets/quiz3.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
            </div>
        </main>
        </div>
    )
}

export default MyQuizzes;
