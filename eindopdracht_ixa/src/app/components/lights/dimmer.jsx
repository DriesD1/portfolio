import { useState } from 'react';
import './light.css';

export default function Dimmer ({onDimmerValueChanged}) {
    const [v, setV] = useState(50);
    const handleOnChange = (e) => {
        setV(e.target.value);

        if (typeof onDimmerValueChanged === 'function'){
            onDimmerValueChanged(e.target.value);
        } 
    }

    return(
        <div className={'dimmer'}>
            <input type="range" id="dimmer" name="dimmer" min="0" max="100" step="1" value={v} onChange={handleOnChange}/>
            <label htmlFor="dimmer">Dimmer</label>
        </div>
    )   
} 