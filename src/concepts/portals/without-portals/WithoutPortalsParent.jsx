import React from 'react'
import WithoutPortalsChild from './WithoutPortalsChild'
import { useState } from 'react'

const WithoutPortalsParent = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>

            <div className='portal-header-content'>
                <h1 className='portal-main-heading'>Company Name</h1>
            </div>

            <div className='modal-div'>

                <button type='button' className='btn btn-primary' onClick={() => setIsOpen(true)}>Open Modal</button>

                <WithoutPortalsChild open={isOpen} close={() => setIsOpen(false)}>
                    PopUp Modal
                </WithoutPortalsChild>

            </div>

            <div className='portal-header-content second-div'>
                <h1 className='portal-main-heading'>Other Content</h1>
            </div>
        </div>
  )
}

export default WithoutPortalsParent