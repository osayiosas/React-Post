import './Modal.css'

export const Modal = ({ children }) => {
    return <> 
        <div className='backdrop' >
            <dialog open className='modal'>
                {children}
            </dialog>
        </div>
    </>
}

export default Modal
