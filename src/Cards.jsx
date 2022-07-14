function Cards(props){
    return(
    <div className="Cards">
    
        <div className="Card">

            <img src= {props.imgsrc} alt = "my pic" className = "Card_img"/>
            
            <div className="Card_info">
            <h1 className="Card_title"> {props.sname} </h1>
            <a href = {props.link} > <button className="button"> Watch Now </button> </a>
            </div>

        </div>
        
    </div>
    )
};
export default Cards