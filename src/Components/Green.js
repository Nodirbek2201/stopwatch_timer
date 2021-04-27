import '../style.scss'

function Green(props){

return <div className={'green'} style={props.isTrue?{filter: 'brightness(1)',
    boxShadow: '0 0 5px 5px rgb(0 128 0 / 20%)'}:{filter: 'brightness(0.2)'}}> </div>

}
export default Green;