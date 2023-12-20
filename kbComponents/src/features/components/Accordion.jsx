import { useState } from "react";


const Accordion = ()=>{
const [expand, setExpand] = useState(false);

const toggleExpand = ()=>{
    setExpand(
        prevValue=>!prevValue // Pass prevValue due to its parameter value

    )
}

   return(
        <>
           <button className="btn" onClick={toggleExpand}>Click me
           <span>{expand ? "-": "+"}</span>
           </button>
           {expand && <p className="pbtn"> Hello there!</p>}
        </>
   );

}
//Toggle hook
export default Accordion;