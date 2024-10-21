import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {

    const [Answer, setAnswer] = useState('');
    const correct = Answer.trim().toLowerCase() == expectedAnswer.trim().toLowerCase();
    function updateAnswer(event :React.ChangeEvent<HTMLInputElement>){
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input 
            type ="text"
            value = {Answer}
            onChange={updateAnswer}
            />
            <div> {Answer && (correct ? "✔️" : "❌")} </div>
        </div>
    );
}
