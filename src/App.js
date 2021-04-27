import {useState, useEffect} from 'react'
import Red from "./Components/Red";
import Yellow from "./Components/Yellow";
import Green from "./Components/Green";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

function App(){

    const [state, setState] = useState({
        green: false,
        yellow: false,
        red: true
    })

    useEffect(()=>{
            setInterval(()=>{
                if(state.red){
                    state.red=false
                    state.yellow=true
                    let a = {...state}
                    setState(a)
                }
                else if(state.yellow){
                    state.yellow=false
                    state.green=true
                    let a = {...state}
                    setState(a)
                }else {
                    state.green=false
                    state.red=true
                    let a = {...state}
                    setState(a)
                }
            },3000)


    },[])



return <div className={'container app'}>
                <div className="row">
                    <div className="col-md-4 offset-4 mr-5">
                        <div className="box">
                            <Red isTrue={state.red}/>
                            <Yellow isTrue={state.yellow}/>
                            <Green isTrue={state.green}/>
                        </div>
                    </div>
                </div>
</div>




}

export default App