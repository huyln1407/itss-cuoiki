import CustomHook from "./CustomHook";
function App() {
    const arrayList = ["Huyen","Hoa","Hung","Long"];
    const [handleInsertData,onSubmit,data,arrData] = CustomHook(arrayList)
  return (
    <div style={{margin:20,fontWeight:'bold'}}>
       <div style={{marginBottom:20}}>
           学生一覧：[Huyen,Hoa,Hung,Long]
       </div>
        <div style={{marginBottom:20}}>
            追加する名前を入力してください。
        </div>
        <div style={{marginBottom:20}}>
        <input onChange={handleInsertData}/>
        </div>
        <button style={{marginBottom:20}} onClick={()=>onSubmit()}>
            確定
        </button>
        <div style={{marginBottom:20}}>
            追加する名前:{data}
        </div>
        <div>
            新しい一覧：{arrData.map((i,key)=>{
            if(key ==0)
            {
                return(
                    <span>[{i},</span>
                )} else if(key == arrData.length -1){
                return(
                    <span>{i}]</span>
                )
            } else{
                return(
                    <span>{i},</span>
                )
            }
        } )}
        </div>
    </div>
  );
}

export default App;
