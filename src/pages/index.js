import * as React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"

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
    <Layout>
      <main style={pageStyles}> 
        <h1>{info.text}</h1>
        <Banner 
          texto="amor"
          url="https://www.google.com"
        ></Banner>
        <Banner 
          texto="libertad"
          url="https://www.mozilla.com"
        ></Banner>
        <Banner/>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Inicio</title>
