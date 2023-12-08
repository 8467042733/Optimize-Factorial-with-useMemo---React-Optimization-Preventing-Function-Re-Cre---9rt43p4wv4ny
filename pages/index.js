"use client"
// import { useState } from 'react';
// import FactorialComponent from '../components/FactorialComponent';
// export default function Home() {
  
     
//   return (
//     <div>
//         <h1>Welcome to Next.js!</h1>
//         <section>
//                 <h2>Factorial Calculation</h2>
//                 <input 
//                     type="number" 
                    
//                    } 
//                 />
       
//                 <FactorialComponent  />
//             </section>
//     </div>
// );
// }

// pages/index.js
import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';

export default function Home() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <section>
        <h2>Factorial Calculation</h2>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
        <FactorialComponent number={inputValue} />
      </section>
    </div>
  );
}

