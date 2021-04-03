import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { guessWord } from './actions';

type Props = {
    success: boolean
}
export default function Input({ success }: Props) {

    const [currentGuess, setCurrentGuess] = useState("");

    const dispatch = useDispatch();

    function onSubmitButtonClick(event: React.MouseEvent) {
        event.preventDefault();
        dispatch(guessWord(currentGuess));
        setCurrentGuess("");
    }

    const inputForm = (
        <form className="form-inline">
            <input
                data-test="input-box"
                className="form-control"
                type="text"
                placeholder="Enter guess"
                value={ currentGuess }
                onChange={ event => setCurrentGuess(event.target.value) }
            />
            <button
                type="submit"
                className="btn btn-primary"
                data-test="submit-button"
                onClick={ (event) => onSubmitButtonClick(event) }>
                Submit
            </button>
        </form>
    );

    return (
        <div data-test="component-input">
            { success ? null : inputForm }
        </div>
    )
}
