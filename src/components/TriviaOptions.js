import Button from './Button';
import CorrectAnswer from './CorrectAnswer';

const TriviaOptions = ({ question, displayAnswer, addPoint, deductChance, disableButtons, enableButtons}) => {

    const checkAnswer = (ans) => {
        if(question[0].correctAnswer === ans) {
            addPoint();
            disableButtons();
        } else {
            deductChance();
        }
    }
    
    return (
        enableButtons ?
        <div className='d-flex flex-column'>
            <h4 className='font-weight-bold mt-4 text-center'>Options</h4>
            <Button classes={'btn btn-primary btn-lg btn-block mt-3'} text={question[0].answerOptions.A} onClick={() => checkAnswer('A')}/>
            <Button classes={'btn btn-primary btn-lg btn-block mt-3'} text={question[0].answerOptions.B} onClick={() => checkAnswer('B')}/>
            <Button classes={'btn btn-primary btn-lg btn-block mt-3'} text={question[0].answerOptions.C} onClick={() => checkAnswer('C')}/>
            <Button classes={'btn btn-primary btn-lg btn-block mt-3'} text={question[0].answerOptions.D} onClick={() => checkAnswer('D')}/>
            <Button classes={'btn btn-dark btn-lg btn-block mt-4'} text='Explain Question' onClick={ displayAnswer }/>
        </div>
        :
        <CorrectAnswer />
    )
}

export default TriviaOptions