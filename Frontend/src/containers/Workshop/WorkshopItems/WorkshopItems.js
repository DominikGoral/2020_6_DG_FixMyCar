import Aux from '../../../hoc/Auxiliary/Auxiliary'
import WorkshopItem from '../../../components/Workshop/WorkshopItems/WorkshopItem/WorkshopItem'
import classes from './WorkshopItems.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASEPATH } from '../../../config'
const axios = require('axios')


class WorkshopItems extends Component {
    state = {
        workshops: [],
        filteredWorkshops: [],
        query: ''
    }

    componentDidMount() {
        axios.get(BASEPATH + '/workshop/all')
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
        this.setState({ query: e.target.value })
    }

    filterWorkshop = (e) => {
        const tempArray = []
        for(let i = 0; i < this.state.workshops.length; i++) {
            if(this.state.workshops[i].WorkshopName.toLowerCase().includes(e.target.value)) {
                tempArray.push(this.state.workshops[i])
            }
        }
        return tempArray
    }

    render() {
        return (
            <Aux>
                <div>
                    <div className={classes.Filters}>
                        <form onSubmit={this.state.search}>
                            <input
                                className={classes.SearchInput}
                                placeholder="Search for..."
                                value={this.state.query}
                                onChange={e => {
                                    this.handleInputChange(e)
                                    const filteredWorkshops = this.filterWorkshop(e)
                                    this.setState({ filteredWorkshops: filteredWorkshops })
                                }} 
                            />
                        </form>
                    </div>
                    <div className={classes.AllWorkshops}>
                        {this.state.filteredWorkshops.map(workshop => (
                        <Link to={'/workshop/' + workshop.NIP} key={workshop.NIP}>
                            <WorkshopItem  
                                name={workshop.WorkshopName}
                                category={workshop.Category}                                                            
                            />
                        </Link>))}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default WorkshopItems