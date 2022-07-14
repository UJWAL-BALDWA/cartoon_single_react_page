import Cards from "./Cards"
function Mcard(val){
    return (

    <Cards 
        imgsrc = {val.imgsrc}
        sname = {val.sname}
        link = {val.link}
    />
    )
}
export default Mcard