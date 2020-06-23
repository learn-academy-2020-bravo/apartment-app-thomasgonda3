import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
      managers: []
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


  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    const apartments = this.state.apartments.map((value, index) => {
      let manager = this.state.managers.filter((obj) => value.manager_id === obj.id)[0]
      return <p key={index}>Property at {value.street} {value.city}, {value.state} {value.zip} in {value.country}.  Managed by {manager.contact}.  Available to discuss at {manager.hours} at {manager.phone}.</p>
    })

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
