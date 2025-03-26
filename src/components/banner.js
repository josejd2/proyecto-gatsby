import * as React from "react"

const styles = {
    borderWidth: 5,
    borderColor: "white",
    borderStyle: "double",
    backgroundColor: "red",
    textAlign: "center",
    minHeight: 200
}

const Banner = ({texto="No me gusta trabajar", url="tonto"}) =>{
    return(
        <div style={styles}>
            <p>{texto}</p>
            <p>{url}</p>
        </div>
    )
}

export default Banner