import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
      managers: [],
      currentApartment: -1
    }
  }

  componentDidMount() {
    const url = "/apartments";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ apartments: response }))
      .catch(() => this.props.history.push("/"))
    const urlTwo = "/managers";
    fetch(urlTwo)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ managers: response }))
      .catch(() => this.props.history.push("/"))
  }

  selectApartment = (value) => {
    this.setState({ currentApartment: value })
  }

  showAll = () => {
    this.setState({ currentApartment: -1 })
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    //displays apartment data, the if statement catches if the fetch is too slow and doesnt activate before this function activates.
    var apartments = []
    if (this.state.apartments.length > 0 && this.state.managers.length > 0) {
      apartments = this.state.apartments.map((value, index) => {
        let manager = this.state.managers.filter((obj) => value.user_id === obj.id)[0]
        return <div key={index + 1}>
                { (this.state.currentApartment === - 1 || this.state.currentApartment === index) &&
                  <div>
                    <h3> Apartment {index + 1}</h3>
                    <p>Property at {value.street} {value.city}, {value.state} {value.zip} in {value.country}.</p>
                  </div>
                }
                { this.state.currentApartment === -1 &&
                  <button onClick = { () => this.selectApartment(index) }>More Details</button>
                }
                { this.state.currentApartment === index &&
                  <div>
                    <p>Managed by {manager.contact}.  Available to discuss at {manager.hours} at {manager.phone}.</p>
                    <button onClick = { () => this.showAll() }>Back to Listings</button>
                  </div>
                }
               </div>
      })
    }

    return (
      <React.Fragment>
      <h1>Apartment Finder</h1>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        { apartments }
      </React.Fragment>
    );
  }
}

export default App
