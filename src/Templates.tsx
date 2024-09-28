import './Templates.scss'

function Templates()
{
    return (
        <>
            <div id="all">
                <div id="creator">
                    <h1>Create quiz</h1>
                    <form>
                        <table>
                            
                            <tr>
                                <th>Content: </th>
                                <td id="con"><textarea placeholder="You can write some informational text here or paste larger articles." id="cont" name="content" rows={2} cols={30}></textarea></td>
                            </tr>
                        </table>
                    <div id="configure">
                        <h4>Configuration:</h4>
                        <p className='config'>
                            Number of questions: 
                            <input type="number" max={128} min={2} step={2}></input>
                        </p>
                        <p className='config'>
                            Difficulty: 
                            <select>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </p>
                        <button><span id="butt">Wygeneruj quiz</span></button>
                    </div>
                    </form>
                    
                </div>
                <div id="result">
                    <h3>Result</h3>
                    <p id="res">Pytanie1</p>
                </div>
            </div>
        </>
    )
}

export default Templates