import { Card } from '../Card/Card';
import style from './card-list.module.css';

export function CardList({ colorList }) {
    return <div>
        <h2>CORES FAVORITAS</h2>
        <div className={style.lista}>
            {colorList.map((card, index) => <Card nome={card.nome} cor={card.cor} key={index} />)}
        </div>
    </div>

}