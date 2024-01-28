import React from 'react'
import PropsChild from './PropsChild'
import PropsDestructuring from './PropsDestructuring'
import PropsChildren from './PropsChildren'

const PropsParent = () => {
  return (
    <div>
        <PropsChild library_name="React"/>
        <PropsDestructuring library_name="React"/>
        <PropsChildren>This is the children of Props</PropsChildren>
    </div>
  )
}

export default PropsParent