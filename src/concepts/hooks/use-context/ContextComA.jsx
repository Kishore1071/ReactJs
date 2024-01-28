import React from 'react'
import ContextComB from './ContextComB'

export const SuperHeroName = React.createContext()

const ContextComA = () => {
  return (
    <div>
        <SuperHeroName.Provider value={'Superman'}>
            <ContextComB></ContextComB>
        </SuperHeroName.Provider>
    </div>
  )
}

export default ContextComA