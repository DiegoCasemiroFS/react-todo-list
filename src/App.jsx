import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { TodoForm } from "./components/TodoForm"
import { TodoGroup } from "./components/TodoGroup"
import TodoContext from "./components/TodoProvider/TodoContext"

function App() {

  const [showDialog, setShowDialog] = useState(false);
  const { todos, addTodo } = use(TodoContext);

  const toogleDialog = () => {
    setShowDialog(!showDialog);
  }

  const handleForSubmit = (formData) => {
    addTodo(formData);
    toogleDialog();
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />
          <TodoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={toogleDialog}>
              <TodoForm onSubmit={handleForSubmit} />
            </Dialog>
            <FabButton onClick={toogleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
