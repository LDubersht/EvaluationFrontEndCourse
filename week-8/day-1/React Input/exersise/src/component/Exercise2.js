
import { useState } from 'react';
import ShowText from './Show';

const Exercise2 = () => {

    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");


    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeFruit = (event) => {
        setFruit(event.target.value);
    }

    return (
        <div>
            <input id="name-input" onChange={handleChangeName} value={name} />
            <select id="select-input" onChange={handleChangeFruit} value={fruit}>
                <option value="mangoo">Mangoo</option>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
            </select>
            <p>{name} select {fruit} </p>
        </div>
    );
}
export default Exercise2;
