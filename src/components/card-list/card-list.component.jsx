import { Component } from "react";


class CardList extends Component {
    render() {
        const { monsters } = this.props; // ES6 destructuring

        return (
            <div className="card-list">
                {
                    monsters.map((monster) => ( // this.props is an object, and monsters is a property of this.props
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))
                }
            </div>
        );
    }
}

export default CardList;
