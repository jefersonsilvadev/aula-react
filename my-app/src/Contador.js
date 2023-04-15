import { useState } from "react";

export default function Contador()
{
    
    const [valor, setValor] = useState(0);

    function add()
    {
        setValor(valor - 1);
        console.log(valor);
    }

    return(

        <div>
            
            <button onClick={add}>Incrementar</button>
            <span>{valor}</span>

        </div>
    );
}