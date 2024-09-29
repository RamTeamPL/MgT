import "./UserResults.css"

function UserResults() {

  const UserResults = [
    {
        "quizSubject": "Quiz subject",
        "grade": 1,
        "points": "3/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 2,
        "points": "9/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 3,
        "points": "12/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 4,
        "points": "17/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 1,
        "points": "3/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 2,
        "points": "9/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 3,
        "points": "12/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 4,
        "points": "17/20",
        "href": "#"
    },
    {
      "quizSubject": "Quiz subject",
      "grade": 1,
      "points": "3/20",
      "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 2,
        "points": "9/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 3,
        "points": "12/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 4,
        "points": "17/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 1,
        "points": "3/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 2,
        "points": "9/20",
        "href": "#"
    },
    {
        "quizSubject": "Quiz subject",
        "grade": 3,
        "points": "12/20",
        "href": "#"
    },
  ]

  return (
    <>
        <table id="UserResults">
          <tr>
            <th>Quiz subjects</th>
            <th>Points</th>
            <th>Grades</th>
          </tr>
          {UserResults.map((item) => (
            <tr>
              <td className="firstField">{item.quizSubject}</td>
              <td>{item.points}</td>
              <td>{item.grade}</td>
              <td><a href={item.href}>review</a></td>
            </tr>
          ))}
        </table>
    </>
  )
}

export default UserResults
