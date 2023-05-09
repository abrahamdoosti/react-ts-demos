import React, { useState } from 'react';
import { isDebuggerStatement } from 'typescript';

interface Item {
    id: number;
    name: string;
}

interface Props {
    items: Item[];
}

export const MyComponent = ({ items }: Props) => {
    const [state, setState] = useState<Item[]>(items);

    const handleRemove = (id: number) => {
        const filteredItems = state.filter(item => item.id !== id);
        setState(filteredItems);
    };
    const handleAdd = () => {
        let idGen = 1;
        let nameGen = "test1"

        if (state.length > 0) {
            idGen = state[state.length - 1].id + 1;
            nameGen = "test" + (state[state.length - 1].id + 1);
        }
        setState(state.concat({ id: idGen, name: nameGen }));
        //setState(filteredItems);
    };

    return (
        <ul>
            <button onClick={handleAdd}>Add Item</button>
            {state.map(item => (
                <li key={item.id}>
                    {item.name} <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default MyComponent;