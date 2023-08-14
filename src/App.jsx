import './App.css'
import { HomePage } from './components/HomePage/HomePage.jsx'
import { Livret } from './components/LivretPage/LivretPage.jsx'

function App() {
  const nameArray = [{name:'kamilla'}, {name:'amina'}, {name:'cæcilie'}]
  const livretArray = [{name:'kylling'}, {name:'ananas'}, {name:'and'}]
  return (
    <>
    <h2>Her navne-opgaven:</h2>
    {nameArray.map((item, index) => {
      return(
      <HomePage key={index} name={item.name} />
    )
      })}
      <br />

      {/* HER ER LIVRET OPGAVEN */}
      <h2>Her er livret-opgaven:</h2>
      {livretArray.map((item, index) => {
        return(
          <Livret key={index} name={item.name} />
        )
      })}
  </>
  )
}

export default App
