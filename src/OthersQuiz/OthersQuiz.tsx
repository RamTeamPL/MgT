import '../MyQuizzes/MyQuizzes.css'
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

function OthersQuiz() {
    return (
        <div>
        <main>
            <p>Prosze państwa i panowie! Oto INNYCH LUDZI quizy! Nie twoje argh hahah a</p>
            <div id="quizzes">
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="Tempor felis, ac pretium, sapien congue dolor erat. Cras nulla, vel est, nibh imperdiet ipsum aenean. Tempor nec, ultricies maximus, rhoncus aenean tempor amet. Tellus rhoncus, sed pellentesque, aenean enim nulla ut. Praesent risus, ex pellentesque, placerat tortor venenatis tristique. Ipsum aenean, sem faucibus, suspendisse tristique molestie a. Dui porta, dignissim imperdiet, ridiculus habitasse imperdiet ante. Consequat velit, diam non, neque faucibus praesent et. Tempor quisque, id lacus, luctus turpis rhoncus vel. Augue aenean, nibh quis, consequat amet pellentesque quam. In elit, aliquam auctor, faucibus varius eu nunc. Lacus luctus, lorem vitae, in elementum in ut. Porta, in, nibh arcu."/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
                <Box src="./krzak_trollface.png" opis="OPIS"/>
            </div>
        </main>
        </div>
    )
}

export default OthersQuiz;
