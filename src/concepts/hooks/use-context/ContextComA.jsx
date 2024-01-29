import React from 'react'
import ContextComB from './ContextComB'

export const SuperHeroNameOne = React.createContext()
export const SuperHeroNameTwo = React.createContext()

const ContextComA = () => {
  return (
    <div>
        <SuperHeroNameOne.Provider value={'Superman'}>
          <SuperHeroNameTwo.Provider value={"Batman"}>
            <ContextComB></ContextComB>
          </SuperHeroNameTwo.Provider>
        </SuperHeroNameOne.Provider>
    </div>
  )
}

export default ContextComA