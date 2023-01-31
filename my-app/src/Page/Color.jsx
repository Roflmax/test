import { useState, useEffect } from 'react';
import axios from 'axios';
function Color(){
    const [theme, setTheme] = useState(null);   
    const [choice, setChoice] = useState(true);
    const [name,setName] = useState(JSON.parse(localStorage.getItem("qwe"))?.name || 'dark')
    useEffect(() => {
      if (choice){
        axios.get(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${name}`)
        .then(response =>{
            setTheme(response.data)
            let obj_style=JSON.stringify(response.data)
            localStorage.setItem('qwe',obj_style)
                document.querySelector(".main").style.color=response.data.textColor
                document.querySelector('.footer').style.backgroundColor=response.data.mainColor
                document.querySelector('.header').style.backgroundColor=response.data.mainColor
                document.querySelector('.body').style.backgroundColor=response.data.secondColor
            
        }).finally(()=>setChoice(false))
      }    
    }, [choice]);
    return(
        <>
        <div className='buttons'>
        <button onClick={()=>{setName('dark')
            setChoice(true)}}>Dark</button>
        <button onClick={()=>{setName('light')
            setChoice(true)}}>Light</button>
        <button onClick={()=>{setName('blue')
            setChoice(true)}}>Blue</button>
        </div>
        </>
    )
}
export default Color
