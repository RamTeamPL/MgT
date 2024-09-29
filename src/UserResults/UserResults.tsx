import { useEffect, useState } from "react";
import LastResult from "./LastResult"

function UserResults() {

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

  return (
    <>
        <div id="#UserResults">
            <div>
                <h2>Your last results</h2>
                <div id="LastResults">
                {UserResults.map((item) => (
                  <div >
                    <h2>{item.grade}</h2>
                    <p>{item.points}</p>
                    <p>{item.quizSubject}</p>
                  </div>
                ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default UserResults
