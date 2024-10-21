import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [selectedChoice, setSelectedChoice] = useState(options[0]);


    const isCorrect = selectedChoice === expectedAnswer;


    function updateChoice(event :React.ChangeEvent<HTMLInputElement>){
        setSelectedChoice(event.target.value);
    }
    return (
        <div>
            <h3>Select Your Answer:</h3>
            <Form.Group>
                <Form.Control
                    as="select"
                    value={selectedChoice}
                    onChange={updateChoice}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <div>
                {selectedChoice && (
                    <span>
                        {isCorrect ? "✔️" : "❌"}
                    </span>
                )}
            </div>
        </div>
    );
}
