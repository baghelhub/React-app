import {useState}  from 'react'

export default function Dharam() {

    const [clear, setClear] = useState("dharam bhai");
    const clearFun = ()=>{
        let txt = "";
          setClear(txt);
      }
    return(
         <>
         <h3>{clear}</h3>
         <button className="btn btn-primary" onClick={clearFun}>Click me to clear Dharam</button>
       
         </>
    )
}


