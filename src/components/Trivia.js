import Button from './Button';
import TriviaOptions from './TriviaOptions';
import ShowAnswer from './ShowAnswer';
import Chances from './Chances';
import Score from './Score';
import GameOver from './GameOver';
import { useState } from 'react';

const Trivia = ({isLoading, getQuestion, question, displayAnswer, showAnswer, disableButtons, enableButtons}) => {
    const [chances, setChances] = useState(5);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    //Plus 1 point for correct answer
    const addPoint = () => setScore(score + 1);

    //Deduct 1 chance for incorrect answer
    const deductChance = () => {
        chances > 0 ? setChances(chances - 1) : setGameOver(true)
    }

    // Sent this functionality down to GameOver.js file
    const resetGame = () => {
        setChances(5);
        setScore(0);
        setGameOver(false);
        getQuestion();
    }

    if(isLoading) return <h1 className="loading mt-4">Loading Trivia</h1>
    console.log(question)

    return (
        <div>
            <Button onClick={ getQuestion } text='Generate Question' classes={'btn btn-success btn-lg btn-block mt-3'}/>
            <div className='d-flex justify-content-between'>
                <Chances chances={chances}/>
                <Score score={score}/>
            </div>
            {
                question.length === 0 ? <h4 className='mt-2 text-center'>Click to generate a question</h4> :
                <div>
                    <h5 className='list-item mt-4 font-weight-bold'>{question[0].question}</h5>
                    <pre className='mt-4'>
                    <code className='text-success'>{question[0].codeSnippet}</code>
                    </pre>
                    <TriviaOptions question={question} displayAnswer={displayAnswer} addPoint={addPoint} deductChance={deductChance} disableButtons={disableButtons} enableButtons={enableButtons}/>
                    {
                        showAnswer ? <ShowAnswer text={question[0].answerExplanation}/> : null
                    }  
                </div>
            }

            {
                gameOver ? <GameOver score={score} resetGame={resetGame}/> : null
            }
        </div>
    )
}

export default Trivia

//answerOptions, _id, id, question, codeSnippet, correctAnswer, answerExplanation