
import { React, useEffect, useState } from 'react';
import './App.css';

// new file import for use usestate hook
//import SetCount from './components/SetCount';

function useeffectusestate() {

    const [data, setData] = useState(0)
    const [count, SetCount] = useState(0)



  useEffect(() => {

    console.warn('useeffect run on every effect',data);

  })

  return (
    <>
     <h2>Data State {data}</h2>
     <h2>Count State {count}</h2>

     <button className='btn btn-primary mx-2' onClick={()=>setData(data+1)}>Update Data</button>
     <button className='btn btn-primary' onClick={()=>SetCount(count+1)}>Update Count</button>

    </>
  );
};

export default App;
