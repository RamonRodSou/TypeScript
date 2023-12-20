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
  const [taskToUpdadte, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) =>{
    // filtrado para remover a task que foi clicada no botão de deletar e retornar todos menos o selecionado
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )

  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')

    if(display){
      modal?.classList.remove('hide');
    }else{
      modal?.classList.add('hide');
    }
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    
    const updatedTask: ITask = {id, title, difficulty}

    const updatedItems = taskList.map((task) => {

      // Retorna um map de cada elemento task  igual a updatedTask.id
      // se for '?' vai para updatedTask se nao ':' permanece a task igual
      return task.id === updatedTask.id ? updatedTask : task

    })
    // Editado, alterar valores para novos valores
    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal 
          children={
              <TaskForm 
                btnText='Editar Tarefa' 
                taskList={taskList} 
                task={taskToUpdadte}
                handleUpdate={updateTask}
                />
        }/>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm 
            btnText='Criar Tarefa' 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Listas tarefas:</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
