import React from 'react'
import ReactDOM from 'react-dom'

const PortalsChild = ({open, children, close}) => {

    if (!open) return null

    return ReactDOM.createPortal(
        <div>
            <div className='overlay'></div>
            <div className='modal-style'>
                
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{children}</h1>
                        </div>
                        <div className="modal-body">
                            <p>Example with Portals</p>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <button type="button" className='btn btn-secondary' onClick={close}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}

export default PortalsChild