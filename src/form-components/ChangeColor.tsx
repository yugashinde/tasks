import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form }from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {

    const colors = [ 
        {name :"red", hex : "#ff0000"},
        {name :"baby blue", hex :"#89CFF0"},
        {name : "baby pink" , hex : "#F4C2C2"},
        {name : "sage green" , hex : "#B2AC88"},
        {name : "orange" , hex : "#FFA500"},
        {name : "brown" , hex : "#964B00"},
        {name : "lilac" , hex : "#C8A2C8"},
        {name : "purple" , hex : "#800080"},
        {name : "grey" , hex : "#808080"},
     ]
    const[c, setcolor]  = useState(colors[0].hex);

    function updateColors(event :React.ChangeEvent<HTMLInputElement>){
        setcolor(event.target.value);
    }


    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                
                 {colors.map((color) => (
                    
            <Form.Check 
            inline 
            type = "radio"
            key = {color.hex}
            id = {color.name}
            label = {color.name}
            value = {color.hex}
            checked={c === color.hex}
            onChange = {updateColors} 
            data-testid= "colored-box" 
            style={{
                        backgroundColor: color.hex,
                        padding: '5px',
                        borderRadius: '4px',
                    }}

            
            />
            
        )) } 

        
        </Form>
        <div>
            You have chosen the <span
                    style={{
                        backgroundColor: c,
                        padding: '5px',
                        borderRadius: '4px',
                    }}
                > {colors.find(color => color.hex === c)?.name}.
            </span> 
            </div> 
        </div>
    );
}
