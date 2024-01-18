import './light.css';

export default function Light ({color: {hue = 255, saturation = 50, lightness = 50}, v = 50 }) {
    return(
        <div className={'light'} style={{ backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${ v / 100})` }}>
            LIGHT
        </div>
    )
} 