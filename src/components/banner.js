import * as React from "react"

const styles = {
    width: 150,
    borderWidth: 5,
    borderColor: "white",
    borderStyle: "double",
    backgroundColor: "red",
    textAlign: "center"
}

const Banner = () =>{
    return(
        <div style={styles}>
            <p>Soy la publicidad</p>
        </div>
    )
}

export default Banner