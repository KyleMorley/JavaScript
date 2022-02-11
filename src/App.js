import { useState, useEffect } from 'react';
import Heading from './components/Heading';
import Trivia from './components/Trivia';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [enableButtons, setEnableButtons] = useState(false);

  useEffect(() => {
    const fetchTrivia = async () => {
      setIsLoading(true);
      const res = await fetch('https://api.javascript-trivia.com/');

      const data = await res.json();
      setData(data.questions)
      setIsLoading(false)
    }
    fetchTrivia()
  }, []);

  //Store data length in constant... Improves speed?
  const getQuestion = () => {
    const dataLength = data.length;
    const getQuestionNumber = Math.ceil(Math.random() * dataLength);
    const filteredQuestion = data.filter(q => q.id === getQuestionNumber);
    setQuestion(filteredQuestion);
    setShowAnswer(false);
    setEnableButtons(true);
  }

  const displayAnswer = () => setShowAnswer(!showAnswer);

  const disableButtons = () => setEnableButtons(false);
  

  return (
    <div className="content">
      <Heading />
      <Trivia isLoading={isLoading} getQuestion={getQuestion} question={question} displayAnswer={displayAnswer} showAnswer={showAnswer} disableButtons={disableButtons} enableButtons={enableButtons}/>
    </div>
  );
}

export default App;
