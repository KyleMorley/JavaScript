import Button from './Button';

const ShowAnswer = ({ score, resetGame }) => {
    return (
        <div className='game-over d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-danger'>Game Over!</h1>
            <h3 className='text-light'>Your total score was {score}</h3>
            <Button onClick={ resetGame } text='Play Again' classes={'btn btn-primary btn-lg mt-3'}/>
        </div>
    )
}

export default ShowAnswer