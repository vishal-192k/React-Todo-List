import React from "react";
import { useState } from "react";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";

const Editpage = () =>{
    const [params] = useSearchParams();
   const [count, setCount] = useState(0)

    const addText = () => {setCount(count+1)}  

    return(
        <div>
            <div>
                <img src={params.get("url")} width="250px" />
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
            <button onClick={addText}>Edit</button>
        </div>
        
    )
}
export default Editpage