import React from 'react'

//CSS
import styles from './Modal.module.css'


interface Props {
    children: React.ReactNode // dizendo que vai usar JSX dentro do Children
}

const Modal = ({children}: Props) => {

  const closeModal = (event: React.MouseEvent): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')   // Exclamacao '!' diz ter certeza que vai chegar esse elemento
  } 

  return (
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}>

        </div>
        <div className={styles.modal}>
            <h2>Texto Modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal