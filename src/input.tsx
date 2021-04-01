import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from './AppState';

type Props = {
    secretWord: string
}
export default function Input({ secretWord }: Props) {
    const [currentGuess, setCurrentGuess] = useState("");
    const success = useSelector((state: AppState) => state.success);
    function onSubmitButtonClick(event: React.MouseEvent) {
        event.preventDefault();
        setCurrentGuess("")
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
