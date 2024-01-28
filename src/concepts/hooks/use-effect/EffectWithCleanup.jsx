import React, { useState, useEffect } from "react";

const EffectWithCleanup = () => {

    const [count, setCount] = useState(0)

    const AutoIcrement = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(AutoIcrement, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default EffectWithCleanup