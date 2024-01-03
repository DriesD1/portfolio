import './light.css';

export default function Light ({ v = 50 }) {
    return(
        <div className={'light'} style={{ opacity: v / 100}}>
            LIGHT
        </div>
    )
} 