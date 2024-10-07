import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


/**
* Here is a helper function you *must* use to "roll" your die.
* The function uses the builtin `random` function of the `Math`
* module (which returns a random decimal between 0 up until 1) in order
* to produce a random integer between 1 and 6 (inclusive).
*/
export function d6(): number {
   return 1 + Math.floor(Math.random() * 6);
}


export function TwoDice(): React.JSX.Element{
  
   //The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values.
   //However, you lose the game if your dice ever come up as a pair of ones (“snake eyes”).
   const [rightRoll, setRightRoll] = useState<number>(1);
   const [leftRoll, setLeftRoll] = useState<number>(0);
   let [m, setM] = useState<string | null >(null);
 
   function rightR(): void{
       setRightRoll(d6());
   }
   function leftR():void{
       setLeftRoll(d6());
   }


  
   useEffect(()=> {
       if(rightRoll === leftRoll){
           if(rightRoll === 1){
               setM('Lose');
           }
           else{
               setM('Win');
           }
       }
       else{
           setM(null);
       }
  }, [rightRoll, leftRoll]);


   return(
       <div>
       <Button onClick={rightR}>
           Roll Right
       </Button>
       <Button onClick = {leftR}>
           Roll Left
       </Button>
       <span data-testid="right-die">{rightRoll}</span>
       <span data-testid="left-die">{leftRoll}</span>
       {m && <p>{m}</p>}
       </div>
      
   );
}