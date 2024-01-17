import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button buttontext='text 1' disabled={true}/>
      <Button buttontext='this is the second button'/>
      <Button buttontext='this is the third button'/>
    </>
  )
}

export default App
