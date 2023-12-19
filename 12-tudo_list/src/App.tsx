import React, { useState } from 'react';

//css
import styles from './App.module.css';

// Component
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Interface
import { ITask } from './interfaces/Task';

function App() {
// em <TaskForm> ta enviando o estado e a maneira de alterar com o setTaskList
  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) =>{
    // filtrado para remover a task que foi clicada no botão de deletar e retornar todos menos o selecionado
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )

  }


  return (
    <div className="App">
      <Modal 
          children={
              <TaskForm 
                btnText='Criar Tarefa' 
                taskList={taskList} 
                />
        }/>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Listas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
