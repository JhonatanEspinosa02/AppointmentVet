import Form from "./Components/Form"
import List from "./Components/List"

function App() {
  

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <Form/>
          <List/>
        </div>

      </div>
    </>
  )
}

export default App
