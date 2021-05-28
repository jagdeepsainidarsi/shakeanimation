// import logo from './logo.svg';
// import './App.css';
import React,{ useState } from 'react';
import { motion } from 'framer-motion';


const Glass=()=>{
    const[active1,setActive]=useState(false)
    const[active,setActive1]=useState(false)
    setTimeout(function(){
        setActive(true);
      },1250)
      setTimeout(function(){
        setActive1(true);
      },5000)
    return(
        <>
       
     
        <div>
        <div id="container">
        <div id="glass">
        <div id="water">
        {active1?<div id="water1"></div>:null}
        <div className="imgdiv1">
        <motion.div
        initial={{y: -1000}}
        animate={{y: 0}}
        transition={{
            type: "tween",
            duration: "1",
            delay: "0"
        }}>
        <div><img id="img1" alt="mongoodb" src="https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png"/></div>
        </motion.div>
        <motion.div
        initial={{y: -1000}}
        animate={{y: 0}}
        transition={{
            type: "tween",
            duration: "1",
            delay: "0.3"
        }}>
        <div><img id="img3" alt="react" src="https://cdn.worldvectorlogo.com/logos/react-1.svg"/></div>
        </motion.div>
        <motion.div
        initial={{y: -1000}}
        animate={{y: 0}}
        transition={{
            type: "tween",
            duration: "1",
            delay: "0.6"
        }}>
        <div>
        <img  id="img2" alt="nodejs" src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"/>
        </div>
        </motion.div>
     </div>
     </div>
     </div>
     {active?<h1 className="label">Web App</h1>:null}
     </div>
     </div> 
     

    
     
        </>
    )
}

export default Glass;