import Aux from '../../../hoc/Auxiliary/Auxiliary'
import WorkshopItem from '../../../components/Workshop/WorkshopItems/WorkshopItem/WorkshopItem'
import classes from './WorkshopItems.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios')





class WorkshopItems extends Component {
    state = {
        workshops: [],
        filteredWorkshops: [],
        query: ''
    }

    componentDidMount() {
        axios.get('http://localhost:8001/workshop/all')
        .then(response => {
            const workshopsReceived = response.data
            this.setState({ 
                workshops: workshopsReceived,
                filteredWorkshops: workshopsReceived 
            })
            //console.log(workshopsReceived)
        })
    }

    handleInputChange = (e) => {
        const newQuery = e.target.value
        this.setState(prevState => {
            const filteredData = prevState.workshops.filter(element => {
                return element.WorkshopName.toLowerCase().includes(newQuery.toLowerCase())
            })
            return {
                query: newQuery,
                filteredWorkshops: filteredData
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <Aux>
                <div>
                    <p style={{textAlign:"center"}}>Warsztaty</p>
                    <form onSubmit={this.state.search}>
                        <input
                            className={classes.SearchInput}
                            placeholder="Search for..."
                            value={this.state.query}
                            onChange={this.handleInputChange} 
                        />
                    </form>
                    {this.state.filteredWorkshops.map(workshop => (
                    <Link to={'/workshop/' + workshop.NIP} key={workshop.NIP}>
                        <WorkshopItem    
                            name={workshop.WorkshopName}
                            category={workshop.Category}                                                            
                        />
                    </Link>))}
                </div>
            </Aux>
        )
    }
}

export default WorkshopItems