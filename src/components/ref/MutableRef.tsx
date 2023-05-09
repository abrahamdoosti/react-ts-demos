// mutable refs with the useRef hook.
//video: https://www.youtube.com/watch?v=hA4i1RTbZ2A&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=16
import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }
    //Added stop timer as an optional feature
    const startTimer = () => {
        {
            interValRef.current = window.setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
            return () => {
                stopTimer()
            }
        }
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button>
            <button onClick={() => startTimer()}>Start Timer</button>
        </div>
    )
}