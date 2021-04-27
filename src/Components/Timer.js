import {useEffect, useState} from 'react'

function Timer(props) {

    const [time, setTime] = useState({
        startMinutes:10,
        minutes: 10,
        seconds: 0
    })

    useEffect(() => {
        let sec = time.startMinutes * 60
        sec--;
        setInterval(() => {
            const minutes = Math.floor(sec / 60)
            let seconds = sec % 60

            setTime({minutes,seconds})

            if(sec>0)
            sec--;

        }, 1000)

    }, [])

    return <div>
        <div className="card">
            <div className="card-header text-center">
                <h1>Timer</h1>
            </div>
            <div className="card-body text-center">
                <h3>{time.minutes<10?'0'+time.minutes:time.minutes}:{time.seconds<10?'0'+time.seconds:time.seconds}</h3>
            </div>
            <div className="card-footer text-right">
                <button onClick={()=>props.closeModal()} className="btn btn-danger">close</button>
            </div>
        </div>
    </div>

}

export default Timer