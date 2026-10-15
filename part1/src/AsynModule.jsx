import { useState } from 'react'
import History from './sub-module/History.jsx'

export default () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        // setAll(allClicks.concat('L'))
        // setLeft(left + 1)

        // setTotal(left + right)
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        console.log("left:", left)
        setTotal(updatedLeft + right)
        console.log("total:", total)  //仍少一次
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(left + updatedRight)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <History allClicks={allClicks} />

            <p>total {total}</p>
        </div>
    )
}