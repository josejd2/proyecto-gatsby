import * as React from "react"
import Banner from "../components/banner"

const pageStyles = {
  backgroundColor: "#000", 
  color: "whitesmoke",
  padding: 12,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const info = {
  text: "Listado de películas",
  url: "https://www.gatsbyjs.com/docs/"
}

const IndexPage = () => {
  // a partir del return jsx
  return (
    <main style={pageStyles}> 
      <h1>{info.text}</h1>
      <Banner></Banner>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Inicio</title>
