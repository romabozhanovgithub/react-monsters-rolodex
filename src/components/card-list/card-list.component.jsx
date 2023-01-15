import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css"; // css applied to entire project


class CardList extends Component {
    render() {
        const { monsters } = this.props; // ES6 destructuring

        return (
            <div className="card-list">
                {
                    monsters.map((monster) => <Card monster={monster} key={monster.id}/>)
                }
            </div>
        );
    }
}

export default CardList;
