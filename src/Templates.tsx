import './Templates.scss'

function Templates()
{
    return (
        <>
            <div id="all">
                <div id="creator">
                    <h1 className='title01'>Create quiz</h1>
                    <form>
                        <table className='tab2'>
                            
                            <tr>
                                <th className='tab1'>Content: </th>
                                <td className='con'><textarea placeholder="You can write some informational text here or paste larger articles." id="cont" name="content" rows={2} cols={30}></textarea></td>
                            </tr>
                        </table>
                    <div id="configure">
                        <h4 className='config1'>Configuration:</h4>
                        <p className='config'>
                            Number of questions: 
                            <input type="number" max={128} min={2} step={2} className='num1'></input>
                        </p>
                        <p className='config'>
                            Difficulty: 
                            <select className='sel1'>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </p>
                        <button className='generate'><span id="butt">Wygeneruj quiz</span></button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Templates