import { useState } from "react";

const Square = ({value, onSquareClick})  => {
   return (
        <button onClick={onSquareClick} className="Square" >{value}</button>
   )
  }
    


export default Square
