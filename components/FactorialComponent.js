

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

// export default function FactorialComponent() {


//   return <div className='result'>The factorial of {} is {}</div>;
// }

// components/FactorialComponent.js
import React, { useMemo } from 'react';

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const FactorialComponent = ({ number }) => {
  const result = useMemo(() => factorial(number), [number]);

  return <div className='result'>The factorial of {number} is {result}</div>;
};

export default FactorialComponent;

