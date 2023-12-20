import React, { useState, ChangeEvent, FormEvent, useEffect }from 'react'
import styles from './TaskForm.module.css'

// Interface
import { ITask } from '../interfaces/Task';

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Alterando o estado de uma lista
    task?: ITask | null
    handleUpdate?(id: number, title: string, difficulty: number): void
  }

const TaskForm = ({btnText, taskList, task, setTaskList, handleUpdate}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setdDifficulty] = useState<number>(0)

  // se criar alguma atribuicao sem states, ela vai atualizar toda hora
  // para evitar isso, usamos o useEffect para gerenciar essa ação
  // Quando rolar algum evento no 'task' ele vai ser atualizado 1 vez e nao um loop infinito
  // e vai add as propriedades no modal

  useEffect(() => {

    if (task) {
      setId(task.id!)
      setTitle(task.title!)
      setdDifficulty(task.difficulty!)
    }
  },[task])
 
  // Enviando os dados
  const addTaskHandler = (event:FormEvent<HTMLFormElement>) => {

    event.preventDefault()
  
    if (handleUpdate) {

      handleUpdate(id, title, difficulty)
      
    } else {

      const id = Math.floor(Math.random() * 1000) 
      const newTask: ITask = {id, title, difficulty} 
  
      // vai add toda taskList add em um array e tambem a newTask
      // coloca a  '!' pra forçar, por que sabe quye vai vir um argumento opcional
      setTaskList!([...taskList, newTask])
  
      //zerando os inputs
      setTitle('')
      setdDifficulty(0)
      
      console.log(taskList)
    }
  }

  // Capiturando o Valur dos inputs

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {

    if(event.target.name === 'title'){
      setTitle(event.target.value)
    }else {
      setdDifficulty(parseInt(event.target.value))
    }
  }


  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Titulo:</label>
            <input 
              type="text" 
              name='title' 
              placeholder='Título da tarefa'
              onChange={handleChange}
              value={title}
            /><br/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input 
              type="text" 
              name='difficulty' 
              placeholder='Dificuldade da tarefa'
              onChange={handleChange}
              value={difficulty}
            /><br/>
        </div>
        <input type='submit' value={btnText}/>
    </form>
  )
}

export default TaskForm