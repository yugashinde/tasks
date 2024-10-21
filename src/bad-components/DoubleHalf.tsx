
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";
import React, { useState } from "react";


    function Doubler({dhValue, setDhValue,}:{dhValue: number; setDhValue: (value:number) => void}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue*2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({dhValue, setDhValue,}:{dhValue: number; setDhValue: (value:number) => void}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue( dhValue * 0.5 );
            }}
        >
            Halve
        </Button>
    );
}
export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
