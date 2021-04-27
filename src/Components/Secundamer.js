import {useEffect, useState} from 'react'

function Sekundomer(props) {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
        interval: '',
        statusInterval: false,
        currentTime: []
    })

    useEffect(() => {
        btnClicked('start')
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(time.interval)
        }
    }, [])

    function btnClicked(status) {
        if (status === 'start') {
            if (!time.statusInterval) {
                time.interval = setInterval(() => {
                    time.second = time.second + 1
                    if (time.second === 60) {
                        time.second = 0
                        time.minute = time.minute + 1
                        if (time.minute === 60) {
                            time.minute = 0
                            time.hour = time.hour + 1
                        }
                    }
                    let currentState = {...time}
                    setTime(currentState)
                }, 1000)
                time.statusInterval = true
                let a = {...time}
                setTime(a)
            }
        } else if (status === 'stop') {
            time.statusInterval = false
            let a = {...time}
            setTime(a)
            clearInterval(time.interval)
        } else if (status === 'interval') {
            time.currentTime.unshift(`${time.hour < 10 ? '0' + time.hour : time.hour}:${time.minute < 10 ? '0' + time.minute : time.minute}:${time.second < 10 ? '0' + time.second : time.second}`)
            let a = {...time}
            setTime(a)
            console.log(time.currentTime)
        } else if (status === 'clear') {
            clearInterval(time.interval)
            setTime({
                hour: 0,
                minute: 0,
                second: 0,
                interval: '',
                statusInterval: false,
                currentTime: []
            })
        }


    }

    return <div>
        <div className="card">
            <div className="card-header text-center">
                <h1>Secundomer</h1>
            </div>
            <div className="card-body text-center">
                <h3>{time.hour < 10 ? '0' + time.hour : time.hour}
                    :{time.minute < 10 ? '0' + time.minute : time.minute}
                    :{time.second < 10 ? '0' + time.second : time.second}</h3>
                <div className="btn-container">
                    <button disabled={time.statusInterval} onClick={() => btnClicked('start')}
                            className={'btn btn-success m-2'}>Start
                    </button>
                    <button disabled={!time.statusInterval} onClick={() => btnClicked('stop')}
                            className={'btn btn-warning m-2'}>Stop
                    </button>
                    <button disabled={!time.statusInterval} onClick={() => btnClicked('interval')}
                            className={'btn btn-info m-2'}>Interval
                    </button>
                    <button onClick={() => btnClicked('clear')} className={'btn btn-dark m-2'}>Clear</button>
                </div>
                <ul className={'list-group'}
                    style={{width: '50%', margin: '0 auto', marginTop: '50px', maxHeight: '252px', overflow: 'auto'}}>
                    {
                        time.currentTime.map((item, index) => <li key={index} className={'list-group-item'}>{item}</li>)
                    }
                </ul>
            </div>
            <div className="card-footer text-right">
                <button className={'btn btn-outline-danger'} onClick={props.closeModal}>close</button>
            </div>
        </div>
    </div>

}

export default Sekundomer;