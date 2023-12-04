
//4.17
import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
   
  const [count, setCount] = useState(0);
  const handleClick =()=>{setCount(prev=>prev+1)}
 
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}

//4.16
// import React, { useState } from "react";

// export default function Appcounter() {
//   const [count, setCount] = useState(0);
//   // 변경가능한 변수를 반환한다.
//   //함수도 반환하는데 값을 변경할 수 있는 함수를 리턴,

//   return (
//     <div className="counter">
//       <span className="number">{count}</span>

//       <button
//         className="button"
//         onClick={() => {
//           //   setCount(count + 1);
//           //   setCount(count + 1);
//           //   setCount(count + 1);
//           //   setCount(count + 1);
//           //   setCount(count + 1);
//           setCount((prev) => prev + 1);
//           setCount((prev) => prev + 1);
//           setCount((prev) => prev + 1);
//           setCount((prev) => prev + 1);
//           setCount((prev) => prev + 1);
//         //   함수가 전달될때 찰칵 함수 호출 ㅚㄷㄹ때 이전 상태값을 전달 받음. count:1 count:2
      
//         }}
//       >
//         Add +
//       </button>
//     </div>
//   );
// }
