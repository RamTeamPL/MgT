import './imageCss.css';


function Image(props :any){
    return(
        <div>
            <img src={props.img}/>
        </div>
    )
}
export default Image;