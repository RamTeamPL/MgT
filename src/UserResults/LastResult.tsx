import { useEffect, useState } from "react";

function LastResult() {
  const [data, setData] = useState([]);

  const UserResults = [
    {
        "quizSubject": "Quiz subject",
        "grade": 1,
        "points": "3/20"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 2,
        "points": "9/20"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 3,
        "points": "12/20"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 4,
        "points": "17/20"
    }
]

  useEffect(() => {
    console.log(data)
    fetch('./UserResults.json')
      .then(response => response.json().then(data => {console.log(data); setData(data)}))
      console.log(data)
  }, []);

    return (
      <>
          {UserResults.map((item) => (
            <div >
              <h2>{item.grade}</h2>
              <p>{item.points}</p>
              <p>{item.quizSubject}</p>
            </div>
          ))}
      </>
    )
  }
  
  export default LastResult
  