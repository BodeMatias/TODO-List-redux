import { React } from "react"
import "./App.css"
import TodoList from "./components/list/TodoList"
import NewDescModal from "./components/modal/NewDescModal"
import Form from "./components/form/Form"

function App() {
   return (
      <>
         <NewDescModal />
         <Form />
         <TodoList />
      </>
   )
}

export default App
