const Questions = ({ title, question }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  console.table(alphabet);

  return (
    <div>
      <h3>
        {title}. {question.question_text}
      </h3>
      <ul>
        {question.answer_options &&
          question.answer_options.map((answer, index) => {
            return (
              <li key={answer.id}>
                {alphabet[index]}. {answer.answer_text}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Questions;
