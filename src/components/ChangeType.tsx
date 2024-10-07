import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";


export function ChangeType(): React.JSX.Element {


   // if short answe chance to multiplechoice
   const [questionType,setQuestionType] = useState<QuestionType>("short_answer_question");


   function changeT  (): void{
       setQuestionType((prevState) => prevState === "short_answer_question" ? "multiple_choice_question" : "short_answer_question");
   }
   return(
       <div>
       <Button onClick={changeT}>Change Type</Button>
           {questionType === "short_answer_question" ? <div>Short Answer</div> : <div>Multiple choice</div>}
       </div>
   );
}
