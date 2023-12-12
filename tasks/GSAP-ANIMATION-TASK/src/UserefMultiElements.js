import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

function UserefMultiElements() {
    const data = [
        {
            title:"Tile 1",
            subtitle :"Subtitle 1"
        },
        {
            title:"Tile 2",
            subtitle :"Subtitle 2"
        },
        {
            title:"Tile 3",
            subtitle :"Subtitle 3"
        }]

    const [bg,setBg] =  useState("blue");
    const headerRef = useRef();
    const cardRef = useRef([]);
    const card = cardRef;
    const ModeChange = ()=>{
       const bgColor =  (bg!=="blue")? "blue" : "coral"
        setBg(bgColor)
    }
    useEffect(()=>{

       gsap.to(headerRef.current,{
        background:bg,
        transition:"3s"
       })

       gsap.to(cardRef.current,{
        background:bg,
        transition:"3s",
        scrollTrigger:""
       })

    })

    console.log(cardRef.current)

   


  return (
    <div className='App'>

        <header ref={headerRef}>
            <img src='https://cdn.vectorstock.com/i/preview-1x/54/68/robot-gradient-logo-design-vector-47405468.jpg' height={100}/>
            <button onClick={ModeChange}>Toggle Background</button>
            <p>
                Scroll Down to see the revealing Sections
            </p>
        </header>

        <main>
            {data.map((v)=>(

               
                    <div ref={cardRef} key={v.title}>
                    <h2>{v.title}</h2>
                    <p> {v.subtitle}</p>
    
                    </div>
                
            )
                
                    
                )}

            {/* <div>
                <h2>title</h2>
                <p>subtitle</p>
            </div>

            <div>
                <h2>title</h2>
                <p>subtitle</p>
            </div> */}
        </main>
      
    </div>
  )
}

export default UserefMultiElements
