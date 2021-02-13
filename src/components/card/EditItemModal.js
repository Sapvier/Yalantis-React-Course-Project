import React from 'react';
import "../header/NavBar.css";
import ReactDom from 'react-dom'


function EditItemModal({open, children, onClose}) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modalOverlay" onClick={onClose}/>
            <div className="modal">
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default EditItemModal;