import React, { useState } from "react";
import { Button } from "react-bootstrap";




export function CycleHoliday(): React.JSX.Element {
   //christmas 4
   //halloween 2
   //new years 5
   //diwali  : 🪔 1
   //thanksgiving 3


   type Holiday =
       |"christmas 🎄"
       |"diwali 🪔"
       |"halloween 🎃"
       |"new years 🎉"
       |"thanksgiving 🍁";




   const [holiday, setHoliday]= useState<Holiday>("christmas 🎄");


   const holidaysbyD: Record<Holiday,Holiday> = {
   "diwali 🪔":"halloween 🎃",
   "halloween 🎃":"thanksgiving 🍁",
   "thanksgiving 🍁":"christmas 🎄",
   "christmas 🎄":"new years 🎉",
   "new years 🎉":"diwali 🪔",
   };


   const holidaysbyA: Record<Holiday,Holiday> = {
   "christmas 🎄" : "diwali 🪔",
   "diwali 🪔":"halloween 🎃",
   "halloween 🎃":"new years 🎉",
   "new years 🎉": "thanksgiving 🍁",
   "thanksgiving 🍁": "christmas 🎄",
   };


   function byDates(): void{
       const newHoliday = holidaysbyD[holiday];
       setHoliday(newHoliday);
   }


   function byAlphabets() : void {
       const newHoliday = holidaysbyA[holiday];
       setHoliday(newHoliday);
   }
  
   return (
       <div>
           <div>Holiday: {holiday}</div>
           <Button onClick={byAlphabets}>Alphabet</Button>
           <Button onClick={byDates}>Year</Button>
          
       </div>
   );
}


