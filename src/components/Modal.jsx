import './Modal.css'

export const Modal = ({ children, onClose }) => {
    return <> 
        <div className='backdrop' onClick={onClose}>
            <dialog open className='modal'>
                {children}
            </dialog>
        </div>
    </>
}

export default Modal
