import React, { useState } from 'react'

type Props = {
    secretWord: string,
    success: boolean
}
export default function Input({ secretWord, success }: Props) {
    const [currentGuess, setCurrentGuess] = useState("");
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
