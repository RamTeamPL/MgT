import "./quiz.css";

export function Quiz() {
  interface QuizQuestion {
    question: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    correctAnswer: string;
  }

  let quizQuestions: QuizQuestion[] = [
    {
      question: "Który kontynent jest największy pod względem powierzchni?",
      answerA: "Afryka",
      answerB: "Ameryka Północna",
      answerC: "Azja",
      answerD: "Europa",
      correctAnswer: "C",
    },
    {
      question: "Która pustynia jest największa na świecie?",
      answerA: "Sahara",
      answerB: "Gobi",
      answerC: "Kalahari",
      answerD: "Antarktyda",
      correctAnswer: "D",
    },
    {
      question: "Jaki kraj ma największą liczbę ludności?",
      answerA: "Indie",
      answerB: "Stany Zjednoczone",
      answerC: "Chiny",
      answerD: "Brazylia",
      correctAnswer: "C",
    },
    {
      question: "Które z tych miast nie jest stolicą?",
      answerA: "Canberra",
      answerB: "Rio de Janeiro",
      answerC: "Ottawa",
      answerD: "Kair",
      correctAnswer: "B",
    },
    {
      question: "Jaka rzeka jest najdłuższa na świecie?",
      answerA: "Amazonka",
      answerB: "Nil",
      answerC: "Jangcy",
      answerD: "Missisipi",
      correctAnswer: "A",
    },
    {
      question: "Które z tych państw nie ma dostępu do morza?",
      answerA: "Szwajcaria",
      answerB: "Hiszpania",
      answerC: "Portugalia",
      answerD: "Francja",
      correctAnswer: "A",
    },
    {
      question: "Które morze znajduje się między Europą a Afryką?",
      answerA: "Morze Kaspijskie",
      answerB: "Morze Śródziemne",
      answerC: "Morze Czarne",
      answerD: "Morze Północne",
      correctAnswer: "B",
    },
    {
      question: "Jaka jest najwyższa góra na świecie?",
      answerA: "Kilimandżaro",
      answerB: "K2",
      answerC: "Mount Everest",
      answerD: "Mount McKinley",
      correctAnswer: "C",
    },
    {
      question: "Który ocean jest największy?",
      answerA: "Ocean Indyjski",
      answerB: "Ocean Spokojny",
      answerC: "Ocean Atlantycki",
      answerD: "Ocean Arktyczny",
      correctAnswer: "B",
    },
    {
      question: "Który kraj ma najwięcej sąsiadujących państw?",
      answerA: "Rosja",
      answerB: "Chiny",
      answerC: "Indie",
      answerD: "Niemcy",
      correctAnswer: "B",
    },
  ];

  // const [getQuestions, setQuestions] = useState<QuizQuestion[]>([]);

  // async function generateText() {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:11434/api/generate",
  //       {
  //         model: "mistral",
  //         prompt: `napisz 2 pytań na temat 2 wojny światowej w formacie: {
  //   "question": "cos tam?",
  //   "answerA": "cosA",
  //   "answerB": "cosB",
  //   "answerC": "cosC",
  //   "answerD": "cosD",
  //   "correctAnswer": "C"}`,
  //         stream: false,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     quizQuestions = response.data.response;
  //     setQuestions(response.data.response);
  //     console.log(getQuestions);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.error(
  //         "Błąd podczas wysyłania żądania:",
  //         error.response?.data || error.message
  //       );
  //     } else {
  //       console.error("Nieznany błąd:", error);
  //     }
  //   }
  // }

  // const GenerateQuestions = () => {
  //   quizQuestions.map((question) => (
  //     <>
  //       {console.log(question.question)}
  //       <div>
  //         <h1>{question.question}</h1>
  //       </div>
  //     </>
  //   ));
  // };

  return (
    <>
      

      {quizQuestions.map((question) => {
        return (
          <div className="quizBlock">
            <div className="quizElement">
              <h1>{question.question}</h1>

              <div className="quizSelect">
                <form>
                  <div className="quizGrid">
                    <div>
                      <h2>
                      <label className="quizLabel">
                          {question.answerA}
                          <input
                            name="radio"
                            className="radio-custom"
                            type="radio"
                          />
                        </label>
                      </h2>
                    </div>

                    <div>
                      <h2>
                      <label className="quizLabel">
                          {question.answerB}
                          <input
                            name="radio"
                            className="radio-custom"
                            type="radio"
                          />
                        </label>
                      </h2>
                    </div>
                    <div>
                      <h2>
                      <label className="quizLabel">
                          {question.answerC}
                          <input
                            name="radio"
                            className="radio-custom"
                            type="radio"
                          />
                        </label>
                      </h2>
                    </div>
                    <div>
                      <h2>
                        <label className="quizLabel">
                          {question.answerD}
                          <input
                            name="radio"
                            className="radio-custom"
                            type="radio"
                          />
                        </label>
                      </h2>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
