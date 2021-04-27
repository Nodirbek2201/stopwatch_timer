import {useEffect,useState} from 'react'
import '../style.scss'

function Red(props){

 /*   const[counter,setCounter] = useState(0)

    let intervalStatus
    useEffect(()=>{
        intervalStatus = setInterval(()=>{
         setCounter(prev=>prev+1)
        },1000)
    },[])

    useEffect(()=>{
        if(props.isTrue){
            clearInterval(intervalStatus)
        }

    },[props.isTrue])*/



return <div className={'red'} style={props.isTrue?{filter: 'brightness(1)',
    boxShadow: '0 0 5px 5px rgb(255 0 0 / 20%)'}:{filter: 'brightness(0.2)'}}>{
   /* props.isTrue?
        (counter<10)?'0'+counter:counter
        : ''*/
}</div>
}


export default Red