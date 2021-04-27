import {useState} from 'react'
import Timer from "./Components/Timer";
import Secundamer from "./Components/Secundamer";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    const [status, setStatus] = useState(false)
    const [modal, setModal] = useState(false)

    function closeModal() {
        setStatus(false)
    }

    function isSecundomer(){
        setStatus(true)
        setModal(true)
    }

    function isTimer(){
        setStatus(true)
        setModal(false)
    }

    return <div className={'container'}>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                {
                    !status ? <div className={'container'}>
                        <div className="row m-5 justify-content-center">
                            <div className="col-md-12">
                                <h3>Click here to <button className={'btn btn-success'} onClick={isSecundomer}>Secondmer</button></h3>
                                <h3>Click here to <button className={'btn btn-success'} onClick={isTimer}>Timer</button></h3>


                            </div>
                        </div>
                    </div> : (modal ? <Secundamer closeModal={closeModal}/> : <Timer closeModal={closeModal}/>)
                }

            </div>
        </div>
    </div>

}

export default App