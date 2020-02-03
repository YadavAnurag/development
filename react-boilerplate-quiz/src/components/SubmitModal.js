import React from 'react';
import Modal from 'react-modal';

const SubmitModal = (props)=>{
  const questionsLeft = props.questionLength - props.answerLength;

  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={props.closeSubmitModal}
    >
      <h3 className="modal__title">Sure to submit....?</h3>
      {
        questionsLeft === 0 ?
        <p>Every question has been answered</p> :
        (questionsLeft) === 1 ?
        <p>{questionsLeft} question is still left</p> :
        <p>{questionsLeft} questions are still left</p> 
      }
      <button className="button" onClick={props.closeSubmitModal}>Go Answer</button>
      <button className="button" onClick={props.handleSubmit}>Submit</button>
    </Modal>
  );
}
Modal.setAppElement('#app');

export default SubmitModal;