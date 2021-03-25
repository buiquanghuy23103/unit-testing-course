import React from 'react'

type Props = {
    secretWord: string
}
export default function Input({ secretWord }: Props) {
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="form-control"
                    type="text"
                    placeholder="Enter guess"
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    data-test="submit-button">

                </button>
            </form>
        </div>
    )
}
