import React from 'react';

export type CongratsProps = {
    success: boolean
}

/**
 * Functional react component for congratulatory message
 * @returns {JSX.Element}
 */
export default function Congrats(props: CongratsProps): JSX.Element {
    return (
        <div data-test="component-congrats">
            <span data-test="congrats-message">{ props.success ? "Congratulation! You guessed the word!" : "" }</span>
        </div>
    )
}
