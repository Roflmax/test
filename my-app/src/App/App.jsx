import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Color from '../Page/Color.jsx'
import News from '../Page/News.jsx'
import '../image/zxc.css';

function App() {
  useEffect(() => {
    const local_style= JSON.parse(localStorage.getItem("qwe"))
    if(local_style){
    document.querySelector(".main").style.color=local_style.textColor
    document.querySelector('.footer').style.backgroundColor=local_style.mainColor
    document.querySelector('.header').style.backgroundColor=local_style.mainColor
    document.querySelector('.body').style.backgroundColor=local_style.secondColor
  }
}, []);
  return (  
    <div className='main'>
      <Header />
      <div className='body'>          
      <Routes >
        <Route path="/" element={<Navigate replace to="/News" />} />
        <Route exact path="/News" element={<News />} />
        <Route path="/Color" element={<Color />} />
      </Routes>
      </div>  
      <Footer />
    </div>
  )
}

export default App;