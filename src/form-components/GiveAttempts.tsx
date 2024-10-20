/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {

    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    const [attemptsAsked, setattemptsAsked] = useState<number|"">(""); 

    const updateAttempts = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value; 
       if (value === '' || /^\d+$/.test(value)) {
            setattemptsAsked(value === '' ? '' : Number(value));
            
        }
    
    }
    return (
        <Form>

            <h3>Give Attempts</h3>
        <label>
                Request Attempts:
                <input
                    type="text" 
                    value={attemptsAsked}
                    onChange={updateAttempts}
                />
            </label>
            
        <div>
            
            
            
            <Button
            onClick={() => {
                setAttemptsLeft(attemptsLeft +1);
            }}
        >
            gain
        </Button>

        <Button
            onClick={() => {
                setAttemptsLeft(attemptsLeft - 1);
            }}
            disabled = {attemptsLeft ===0 }
        >
            use
        </Button>
        <div> {attemptsLeft} </div>
        </div>

        </Form>
    );
    
}


