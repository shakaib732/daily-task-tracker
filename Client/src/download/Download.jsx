import React from 'react'
import ErrorModal from '../errorProvider/ErrorModal'

function Download() {

  const onCloseClicked = () =>{
    console.log('closed')
  }
  return (
    <ErrorModal onClose={() => setIsModalOpen(false)}/>
  )
}

export default Download