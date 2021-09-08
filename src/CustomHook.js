import React, {useEffect, useState} from 'react';
function CustomHook(arrList){
    const [data,setData] = useState();
    const [arrData,setArrData] = useState(arrList);
     const insertData=(e)=>{
         setData(e.target.value);
     }
     const onSubmit=()=>{
         arrList.push(data);
         setArrData([...arrData,data]);
         console.log(arrList);
     }
     return [insertData,onSubmit,data,arrData]
}
export default CustomHook;