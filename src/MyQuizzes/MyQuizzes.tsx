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
            <p>Prosze państwa i panowie! Oto TWOJE quizy! Zanóż sie w możliwości jakie daje pieniądz w ten słonceczny dzień!</p>
            <div id="quizzes">
                <Box src="./src/assets/quiz1.jpg" opis="OPIS"/>
                <Box src="./src/assets/quiz2.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="Tempor felis, ac pretium, sapien congue dolor erat. Cras nulla, vel est, nibh imperdiet ipsum aenean. Tempor nec, ultricies maximus, rhoncus aenean tempor amet. Tellus rhoncus, sed pellentesque, aenean enim nulla ut. Praesent risus, ex pellentesque, placerat tortor venenatis tristique. Ipsum aenean, sem faucibus, suspendisse tristique molestie a. Dui porta, dignissim imperdiet, ridiculus habitasse imperdiet ante. Consequat velit, diam non, neque faucibus praesent et. Tempor quisque, id lacus, luctus turpis rhoncus vel. Augue aenean, nibh quis, consequat amet pellentesque quam. In elit, aliquam auctor, faucibus varius eu nunc. Lacus luctus, lorem vitae, in elementum in ut. Porta, in, nibh arcu."/>
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
