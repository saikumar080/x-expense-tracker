import React from "react";
import Modal from "react-modal";
import ExpenseForm from "./ExpenseForm";
Modal.setAppElement('#root');
export default function ExpenseModal({isOpen,onClose,editData}){
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
        >
            <ExpenseForm onClose={onClose} editData={editData}/>
        </Modal>
    )
}