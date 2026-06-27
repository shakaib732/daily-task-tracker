import React from 'react'
import './ErrorModal.css'

function ErrorModal({ message,closeModal }) {
    return (
        <>
            <div className='modal-backdrop' >
                
                <div className='card' onClick={(e) => e.stopPropagation()}>
                    
                    <div className='card_header'>
                        <h2>Error Occurred</h2>
                        <div className='header-right'>
                            <span className='status-pending'>OOPS!!</span>
                            {/* Close Button */}
                            <button className='close-btn' onClick={closeModal} aria-label="Close modal">
                                &times;
                            </button>
                        </div>
                    </div>
                    
                    <h3 className='card_desc'>Error Message {message}</h3>
                    
                </div>
            </div>
        </>
    );
}

export default ErrorModal