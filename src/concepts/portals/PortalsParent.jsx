import React from 'react'
import PortalsChild from './PortalsChild'
import { useState } from 'react'

const PortalsParent = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>

            <div className='portal-header-content'>
                <h1 className='portal-main-heading'>Company Name</h1>
            </div>

            <div className='modal-div'>

                <button type='button' className='btn btn-primary' onClick={() => setIsOpen(true)}>Open Modal</button>

                <PortalsChild open={isOpen} close={() => setIsOpen(false)}>
                    PopUp Modal
                </PortalsChild>

            </div>

            <div className='portal-header-content second-div'>
                <h1 className='portal-main-heading'>Other Content</h1>
            </div>
        </div>
  )
}

export default PortalsParent