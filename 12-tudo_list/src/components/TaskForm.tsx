import React, { useState, ChangeEvent, FormEvent, useEffect }from 'react'
import styles from './TaskForm.module.css'

// Interface
import { ITask } from '../interfaces/Task';

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Alterando o estado de uma lista
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setdDifficulty] = useState<number>(0)

 
  // Enviando os dados
  const addTaskHandler = (event:FormEvent<HTMLFormElement>) => {

    event.preventDefault()

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