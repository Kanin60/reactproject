import './App.css'
import { HomePage } from './components/HomePage/HomePage.jsx'

function App() {
  const nameArray = [{name:'kamilla'}, {name:'amina'}, {name:'cæcilie'}]
  
  return (
    <>
    {nameArray.map((item, index) =>{
      return(
      <HomePage key={index} name={item.name} />
    )
      })}
  </>
  )
}


export default App



/* Et Komponent skrevet i .jsx der tager imod props
At komponentet er et child af App.jsx og renderes i browseren */