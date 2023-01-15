import Card from "../card/card.component";

import "./card-list.styles.css"; // css applied to entire project


const CardList = ({ monsters }) => { // destructuring props, instead of props.monsters
    return (
        <div className="card-list">
            {
                monsters.map((monster) => <Card monster={monster} key={monster.id}/>)
            }
        </div>
    );
}

export default CardList;
