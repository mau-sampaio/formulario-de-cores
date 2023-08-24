import style from './card.module.css'

export function Card({ nome, cor }) {
    return <div className={style.card} style={{ background: cor }}>
        <p>{nome}</p>
        <h3>{cor}</h3>
    </div>
}