import React from 'react'
import ChildWithFragment from './ChildWithFragment'
import ChildWithoutFragment from './ChildWithoutFragment'

const FragmentParent = () => {
  return (
    <React.Fragment>
        <div>
            <h1>Container 1</h1>
            <ChildWithFragment></ChildWithFragment>
        </div>
        <div>
            <h1>Container 2</h1>
            <ChildWithoutFragment></ChildWithoutFragment>
        </div>
    </React.Fragment>
  )
}

export default FragmentParent