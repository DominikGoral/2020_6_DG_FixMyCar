import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BASEPATH } from '../../../config'

import classes from './MechanicWorkshops.css'
import WorkshopItem from '../../../components/Workshop/WorkshopItems/WorkshopItem/WorkshopItem'
import Button from '../../../components/UI/Button/Button'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import AddWorkshop from './AddWorkshop/AddWorkshop'

class MechanicsWorkshops extends Component {
    state = {
        workshops: null,
        showForm: false
    }

    componentDidMount() {
        console.log('dasdasd: ' + this.props.userId)
        axios.get(BASEPATH + '/mechanic/workshop/all',{
            params: {
                userId: this.props.userId
            }
        })
        .then(response => {
            const receivedWorkshops = response.data
            this.setState({ workshops: receivedWorkshops })
            console.log(this.state.workshops)
        })
    }

    showHideFormHandler = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        let workshopsData = []
        for(let key in this.state.workshops) {
            workshopsData.push({
                id: key,
                config: this.state.workshops[key]
            })
        }
        const workshops = workshopsData.map(workshop => (
            <Link to={'/workshop/' + workshop.config.NIP} key={workshop.NIP}>
                <WorkshopItem    
                    name={workshop.config.WorkshopName}
                    category={workshop.config.Category}                                                            
                />
            </Link>
        ))
        return(
            <Aux>
                <p style={{ marginLeft: '10%', fontSize: '200%' }}>Dodaj warsztat <AiOutlinePlusCircle style={{ fontSize: 30 }} onClick={() => this.showHideFormHandler()} /></p>
                {this.state.showForm ? <AddWorkshop userId={this.props.userId}/> : null}
                <div>
                    {workshops}
                </div>
            </Aux> 
        )
    }

}

export default MechanicsWorkshops