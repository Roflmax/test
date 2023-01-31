import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ref from '../image/ref.png'
function News(){
    const [news, setNews] = useState(JSON.parse(localStorage.getItem("new"))||[]);
    const [page, setPage] = useState(Number(localStorage.getItem("count_new"))||1);
    const [refreshing, setRefreshing] = useState(true);
  
    useEffect(() => {
      if (refreshing){
        axios.get(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${page}&count=10`)
        .then(response =>{
          setNews([...news,...response.data])
          setPage(count=>count+1)
          localStorage.setItem('new',JSON.stringify(news))
          localStorage.setItem('count_new',(page))
        }).finally(()=>setRefreshing(false))
      }     
    }, [refreshing]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function (){
          document.removeEventListener('scroll',scrollHandler)
        }   
    }, []);
  
    const scrollHandler = (e) =>{
      if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<100){
        setRefreshing(true)
      }
    }
    console.log(news)
    return (
      <>
      <img
        className='ref'
        width="50" 
        height="50"
        src={ref}
        alt="ref"
        onClick={()=>setRefreshing(true)}
      />
        {news.map(item=>{ 
          return(
            <div key={item.id} className='news'>
              <h2>{item.title}</h2>
              <div className='main_text'>{item.content}</div>
              <div>Создан: {new Date(item.createdAt).toLocaleString()}</div>
              <div>Обновлён: {new Date(item.updatedAt).toLocaleString()}</div>
              <hr></hr>
            </div> 
            )
        })}
      </>
    );
    
  }
export default News