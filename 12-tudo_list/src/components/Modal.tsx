import React from 'react'

//CSS
import styles from './Modal.module.css'


interface Props {
    children: React.ReactNode // dizendo que vai usar JSX dentro do Children
}

const Modal = ({children}: Props) => {
  return (
    <div id='modal'>
        <div className={styles.fade}>

        </div>
        <div className={styles.modal}>
            <h2>Texto Modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal