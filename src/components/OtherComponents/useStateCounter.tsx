import { useState } from "react";

type CountProps = {
    initialCount: number;
}

export const CounterUseState = ({ initialCount }: CountProps) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}