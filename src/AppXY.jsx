import React from "react";
import "./AppXY.css";

import { useState } from "react";
export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [y, setY] = useState(0);
  // 개별적으로 x,y를 관리 하는 것이 아니라
  // 연관 있는 객체는 객체로 묶어서 관리해준다.

  // setPosition({x:e.clientX, y:e.clientY});
  // 만약 수평축으로만 이동이 가능하다면??

  // 하나의 콜백함수 안에서 set set 비동기 적으로 set을 여려버 ㄴ호출하면 마음ㄷ대로 안ㄱ될 수 도 있음

  // useEffect(changePosition, [position.x, position.y]);
  return (
    <>
      <div
        className="container"
        onPointerMove={(e) =>
          setPosition((prev) => ({ ...prev, x: e.clientX }))
        }
      >
        <div
          className="pointer"
          style={{ transform: `translate(${position.x}px ,${position.y}px)` }}
        />
      </div>
    </>
  );
}
