import React, { Component } from 'react'
const axios = require('axios')
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import WorkshopItem from '../../../components/Workshop/WorkshopItems/WorkshopItem/WorkshopItem'


class WorkshopItems extends Component {
    state = {
        workshops: []
    }

    componentDidMount() {
        axios.get('http://localhost:8001/api/test/workshop/all')
        .then(response => {
            console.log(response)
            const workshopsReceived = response.data
            this.setState({ workshopsReceived })
        })
    }

    render() {
        return (
            <Aux>
                <div>
                    <p>Warsztaty</p>
                    {
                        this.state.workshops.map(workshop => <WorkshopItem name={workshop.WorkshopName} category={workshop.Category}/>)
                    }
                </div>
            </Aux>
        )
    }
}

export default WorkshopItems