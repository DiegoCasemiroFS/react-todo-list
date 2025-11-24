import './dialog.style.css';
import { useEffect, useRef } from 'react';

export function Dialog({ isOpen, onClose, children }) {

    const dialogRef = useRef(null);

    useEffect(() => {
        console.log('Abrir dialog', isOpen);
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen, onClose]);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef} className="dialog">
                <div className='btn-close-wrapper'>
                    <button
                        autoFocus
                        onClick={onClose}
                        className='btn-close'
                    >
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    )
}
