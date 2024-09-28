import './MyQuizzes.css'

function Box({src, opis}) {
    return (
        <div class="quizzTile">
            <img src={src}/><br/>
            <span>{opis}</span>
        </div>
    )
}

function MyQuizzes() {
    return (
        <div id="quizzes">
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
            <Box src="./krzak_trollface.png" opis="OPIS"/>
            <Box src="./krzak_trollface.png" opis="OPIS"/>
        </div>
    )
}

export default MyQuizzes;
