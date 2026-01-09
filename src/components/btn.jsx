function Btn({className,onButtonClick}){

  const btn_container=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return <div>
    {btn_container.map((btns)=>(<button key={btns}  className={className}  onClick={() => onButtonClick(btns)}>{btns}</button>))}
    
  </div>
}

export default Btn;