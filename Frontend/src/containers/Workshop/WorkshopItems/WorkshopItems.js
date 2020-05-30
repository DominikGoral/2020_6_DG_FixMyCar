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

    render() {
        console.log(this.state)
        return (
            <Aux>
                <div>
                    <div className={classes.Filters}>
                        <form onSubmit={this.state.search}>
                            <input
                                className={classes.SearchInput}
                                placeholder="Search for..."
                                value={this.state.query}
                                onChange={this.handleInputChange} 
                            />
                        </form>
                        <select name="typesOfWorkshop" className={classes.TypeOfWorkshop}>
                            <option value="all">Wszystkie</option>
                            <option value="wulkanizacja">Wulkanizacja</option>
                            <option value="mechanika">Mechanika</option>
                            <option value="elektryka">Elektryka</option>
                        </select>
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