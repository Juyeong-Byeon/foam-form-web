import React, { useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <h2>{count}</h2>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>++</button>
            <button onClick={()=>setCount(count-1)}>--</button>
        </div>
    )
}
