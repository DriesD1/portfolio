import { useState } from "react";
import Dimmer from "./dimmer";
import Light from "./light";

export default function DimmedLights () {
    const [v, setV] = useState(50);

    const handleDimmerValueChanged = (value) => {
        setV(value);
    }

    return(
        <>
            <Dimmer onDimmerValueChanged={handleDimmerValueChanged} />
            <Light v={v} color={{hue: 100, saturation: 50, lightness: 50}}/>
        </>
    )
}