import { useState } from 'react'

const Accordion = () => {

    const [number, setNumber] = useState(0);
    const handleNum = () => {
        setNumber(number + 1)
    }

    //I always create the state inside of the fcn
    /**Let's use ternary operator */
   
    const [expand, setExpand] = useState(true);
     
    const toggleFcn =()=>{
        setExpand(
           prevExpand=>!prevExpand//prevExpand is a parameter
        )
    }
    // The arrow fcn pass the parameter prevExpand as its previously value, so it says hey the any value you have i will return it as negative value
    console.log(expand);
//i can set a fcn inside a useState
   
   


    return (
        <>
            <h1> Yup come see how it works </h1>
            <button onClick={handleNum}> +{number}</button>
            <p>Using ternary conditional if true then execute the tag </p>
            <code> const [expand, setExpand] = useState(false);</code>
            <button onClick={toggleFcn}>Click</button>
            {expand && <h3>Im about to die if you press the above button</h3>}

        </>
    );

}

export default Accordion;