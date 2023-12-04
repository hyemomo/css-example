import {React, useState} from 'react';
import Products from './components/products';
export default function AppProducts() {
    const [showProducts, setShowProducts]= useState(true)

    return (
        <div>
            {showProducts&&<Products />}
            {/* showProducts가 true 이면 products 컴포넌트를 보여줌  */}
            <button onClick={()=>{setShowProducts((show)=>!show)}}>Toggle</button>
            {/* 버튼을 클릭했을때 showProducts의 이전 상태가 true 이면 false로 바꿈 */}
        </div>
    );
}

