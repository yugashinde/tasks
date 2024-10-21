import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {

    const [inEditMode, setInEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleToggleEditMode = () => {
        setInEditMode(!inEditMode);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(e.target.checked);
    };

    return (
        <div>
            <Form.Check
                type = "switch"
                checked={inEditMode}
                onChange={handleToggleEditMode}
                label={inEditMode ? "Switch to View Mode" : "Switch to Edit Mode"}
            />
            {inEditMode ? (
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </div>
            )}
        </div>
    );

}
