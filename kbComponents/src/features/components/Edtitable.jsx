import { useState } from "react";

const Editable = ()=>{
    const [editable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const toggleEdit = ()=>{
        setEditable(
            (prevEdit)=>!prevEdit
        );
    };
    const handleInput = (e)=>{
        setInputValue(e.target.value);
    };
   
    return(
        <section>
          
          {editable ? (
           <label>
              Title
                 <input type="text" value={inputValue} onChange={handleInput} />
           </label>
          ) : (
            <> Title {inputValue}</>
          )}
          <br />
          <button onClick={toggleEdit}> {editable? "Submit":"Edit"}</button>

        </section>
    )

}

export default Editable;