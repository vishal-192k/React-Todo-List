import React from "react";
import { useState , createRef } from "react";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import {exportComponentAsJPEG} from "react-component-export-image";

const Editpage = () =>{
    const [params] = useSearchParams();
   const [count, setCount] = useState(0)

   const memeRef = createRef();

    const addText = () => {setCount(count+1)}  

    return(
        <div>
            <div style={{width:"500px", border: "1px solid"}} ref={memeRef} className="meme mt-5 mb-5">
                <img src={params.get("url")} width="250px" />
                {
                    Array(count).fill(0).map(e => <Text />)
                }
            </div>
            <button onClick={addText}>Edit</button>
            <button variant = "success" onClick={(e) =>{exportComponentAsJPEG(memeRef)}}>Save</button>
           
        </div>
        
    )
}
export default Editpage