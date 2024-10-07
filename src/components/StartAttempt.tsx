import React, { useState } from "react";
import { Button } from "react-bootstrap";


export function StartAttempt(): React.JSX.Element {
   const [attempts, setAttempts] = useState<number>(4);
   const [inProgress, setinProgress] = useState<boolean>(false);
   function startQ() : void{
       if(attempts >  0){
           setinProgress(true);
           setAttempts((prevA) => prevA -1);
       }
   }
   function stopQ() :void {
       setinProgress(false);
   }
   function mulligan(): void{
       setAttempts((prevA)=>prevA+1);
   }
   return (<div>
       <h2>Quiz Attempts: {attempts}</h2>
       <Button onClick={startQ}disabled={inProgress || attempts === 0}>
           Start Quiz
       </Button>
       <Button onClick={stopQ} disabled = {!inProgress}>
           Stop Quiz
       </Button>
       <Button onClick={mulligan} disabled = {inProgress}>
           Mulligan
       </Button>
   </div>);
}


