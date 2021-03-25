import React, { useState } from 'react'

type Props = {
    secretWord: string
}
export default function Input({ secretWord }: Props) {
    const [currentGuess, setCurrentGuess] = useState("");
    return (
        <div data-test="component-input">
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
                    onClick={ () => setCurrentGuess("") }>

                </button>
            </form>
        </div>
    )
}
