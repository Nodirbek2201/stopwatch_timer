import '../style.scss'

function Yellow(props){

    return <div className={'yellow'} style={props.isTrue?{filter: 'brightness(1)',
        boxShadow: '0 0 5px 5px rgb(255 255 0 / 20%)'}:{filter: 'brightness(0.2)'}} > </div>
}

export default Yellow