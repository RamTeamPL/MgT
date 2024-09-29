import '../MyQuizzes/MyQuizzes.css'
import '../srodekCSS.css'

function Box({src, description}) {
    return (
        <div className="quizzTile">
            <img src={src}/><br/>
            <span>{description}</span>
        </div>
    )
}

function OthersQuiz() {
    return (
        <div>
        <main className="box">
            <div id="quizzes">
                <Box src="./src/assets/quiz3.png" description="description"/>
                <Box src="./src/assets/quiz5.jpg" description="description"/>
                <Box src="./src/assets/quiz2.png" description="description"/>
                <Box src="./src/assets/quiz7.jpg" description="description"/>
                <Box src="./src/assets/quiz10.jpg" description="description"/>
                <Box src="./src/assets/quiz6.jpg" description="description"/>
                <Box src="./src/assets/quiz3.png" description="description"/>
                <Box src="./src/assets/quiz6.jpg" description="description"/>
                <Box src="./src/assets/quiz5.jpg" description="description"/>
                <Box src="./src/assets/quiz2.png" description="description"/>
                <Box src="./src/assets/quiz1.jpg" description="description"/>
                <Box src="./src/assets/quiz8.jpg" description="description"/>
                <Box src="./src/assets/quiz4.jpg" description="description"/>
                <Box src="./src/assets/quiz8.jpg" description="description"/>
                <Box src="./src/assets/quiz3.png" description="description"/>
                <Box src="./src/assets/quiz5.jpg" description="description"/>
                <Box src="./src/assets/quiz2.png" description="description"/>
                <Box src="./src/assets/quiz7.jpg" description="description"/>
                <Box src="./src/assets/quiz10.jpg" description="description"/>
                <Box src="./src/assets/quiz6.jpg" description="description"/>
                <Box src="./src/assets/quiz3.png" description="description"/>
                <Box src="./src/assets/quiz6.jpg" description="description"/>
                <Box src="./src/assets/quiz5.jpg" description="description"/>
                <Box src="./src/assets/quiz2.png" description="description"/>
                <Box src="./src/assets/quiz1.jpg" description="description"/>
                <Box src="./src/assets/quiz8.jpg" description="description"/>
                <Box src="./src/assets/quiz4.jpg" description="description"/>
                <Box src="./src/assets/quiz8.jpg" description="description"/>
            </div>
        </main>
        </div>
    )
}

export default OthersQuiz;
