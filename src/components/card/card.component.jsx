import { Component } from "react";

import "./card.styles.css"; // css applied to entire project


class Card extends Component {
    render() { // this.props is an object, and monsters is a property of this.props
        const { monster } = this.props; // ES6 destructuring
        const { name, email, id } = monster; // ES6 destructuring

        return (
            <div className="card-container">
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;
