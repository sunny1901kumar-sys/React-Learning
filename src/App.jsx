import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Sunny",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 mb-4 font-bold text-black p-4 rounded-xl">
      Tailwind Test
      </h1>
      <Card username="chaiaur code" btnText="click me" />
      <Card username={myObj.username} />
    </>
  )
}

export default App
