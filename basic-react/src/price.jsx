export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine : "line-through"
    };
    let newStyles = {
        fontWeight : "bold"
    }; 

    let styles = {
        backgroundColor : "#cc8f14",
        borderBottomLeftRadius : "10px",
        borderBottomRightRadius : "10px"
    }

    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}