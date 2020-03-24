import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import Aux from './Auxiliary'
import './App.css';

class App extends Component {
  state = {
    ServiceName: '',
    services: []
  }

  componentDidMount() {
    axios.get('http://localhost:8001/')
      .then(res => {
        const services = res.data
        this.setState({ services })
        console.log(services)
      })
  }

  postDataHandler = () => {
    const service = {
      ServiceName: this.state.ServiceName
    }
    axios.post('http://localhost:8001/', service)
      .then(res => {
        console.log(service)
      })
  }

  render() {
    return (
      <Aux>
        <div style={{textAlign: "center"}}>
          <h1>
              DODAJ NOWĄ USŁUGĘ
            </h1>
          <form>
            <label>Nazwa usługi </label>
            <textarea rows="5" cols="50" onChange={(event) => this.setState({ServiceName: event.target.value})}/>
            <button type="submit" onClick={this.postDataHandler}>Dodaj usługę</button>
          </form>
        </div>
        <div style={{textAlign: "center"}}>
          <h1>
            WSZYSTKIE USŁUGI
          </h1>
          <div className="services">
            {this.state.services.map(service => <li>{service.ServiceName}</li>)}
          </div>
        </div>
      </Aux>
      
    );
  }
}

export default App;
