import React from 'react';

// defines the component called HornedBeast
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        // sets starting favourite value at 0
        this.state = {
            favourites: 0, 
        };

        // binds the "handleClick" function to this component instance
        this.handleClick = this.handleClick.bind(this);
    }

    // This function increments the number of favourites when the heart icon is clicked
    handleClick() {
        // Updates the state of favourites by 1
        this.setState((prevState) => ({
            favourites: prevState.favourites + 1,
        }));
    }

    // renders the component
    render() {
        return (
            <div>
                {/* name of the beast */}
                <h2>{this.props.title}</h2>
                
                {/* picture of the beast */}
                <img className="image" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />

                {/* favourite button displayed */}
                <div>
                    <span role="img" aria-label="heart" onClick={this.handleClick}>❤️</span>
                    <span>{this.state.favourites}</span>
                </div>

                {/* describes the beast */}
                <p>{this.props.description}</p>
            </div>
        );
    }
}

// Exports the component to make it available to other modules
export default HornedBeast;