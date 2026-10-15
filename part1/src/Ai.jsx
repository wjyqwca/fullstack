import { useState } from 'react'
import Display from './sub-module/Disply.jsx'
import Button from './sub-module/Button.jsx'

export default () => {
    const [counter, setCounter] = useState(0)

    const addOne = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <Display counter={counter} />
            <Button onClick={addOne} text={"+1"} /> {/* 加一 */}
            <Button onClick={reset} text={"zero"} />  {/* 置零 */}
        </>
    )
}  