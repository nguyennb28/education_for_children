const Questions = ({ title, question }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  return (
    <div className="duration-300 ease-in border-2 border-dotted border-gray-900 rounded-lg shadow-xl mb-4 p-10">
      <h3>
        {title}. {question.question_text}
      </h3>
      <div className="flex flex-col justify-center items-start">
        {question.answer_options &&
          question.answer_options.map((answer, index) => {
            return (
              <button
                type="button"
                className="w-full flex cursor-pointer duration-300 transistion ease-in-out hover:bg-sky-200 p-3 hover:rounded hover:shadow-lg"
                key={answer.id}
              >
                {alphabet[index]}. {answer.answer_text}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Questions;
