import { Component } from "react";

import "./search-box.styles.css"; // css applied to entire project


class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props; // ES6 destructuring

        return (
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;
