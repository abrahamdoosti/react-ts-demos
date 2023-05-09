//Video: https://www.youtube.com/watch?v=hA4i1RTbZ2A&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=16
import { useRef, useEffect } from "react";

//The component is where we use ref hook to focus an input element when the component mounts.
export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}