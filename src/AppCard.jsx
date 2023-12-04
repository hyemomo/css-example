import React from "react";

export default function AppCard() {
  return (
    <div>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
      <Card>
        <article>card</article>
      </Card>
      <Card>
        <p>Card4</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return(<div
    style={{
      backgroundColor: "black",
      width: "100px",
      height: "100px",
      borderRadius: "10px",
      color:'white'
    }}
  >
    {children}
  </div>)
  
}
