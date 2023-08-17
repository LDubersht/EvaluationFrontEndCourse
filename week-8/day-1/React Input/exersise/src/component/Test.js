import { useState } from "react";
import ShowText from './Show';

const InputTest = () => {
    const [text, setText] = useState("")

    const updateText = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={updateText} />
            <ShowText sh={text}/>
        </div>
    )
}

export default InputTest