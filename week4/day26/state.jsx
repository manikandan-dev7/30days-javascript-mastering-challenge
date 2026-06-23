// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click to add one</button>
//       <button onClick={()=> setCount(count-1)}>Click to sub one</button>
//     </div>
//   );
// };

// export default Counter


// import { useState } from "react";

// const Toggle = () => {
//     const[togg, setTogg] = useState(false);

//     return (
//         <div>
//             <p>{togg ? "on" :"off"}</p>
//             <button onClick={() => setTogg (!togg)}>ON</button>
//         </div>
//     )
// }

// export default Toggle

import { useState } from "react";

const Inputval = () => {
    const[input, setInput] = useState("");

    return (
        <div>
            <p>Hello,{input}</p>
            <input type="text" onChange={(e)=> setInput(e.target.value)}></input>
        </div>
    )
}

export default Inputval