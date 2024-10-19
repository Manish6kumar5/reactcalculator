import style from './Button.module.css'

export default function Button({onButtonClick}) {
    const Button_list=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={style.button_container}>
  {Button_list.map(btname=>  <button key={btname}className={style.button} onClick={()=>onButtonClick(btname)}>{btname}</button>)}
   
  </div>
  )
}
