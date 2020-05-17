import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './MechanicsDashboard.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import MechanicWorkshops from '../MechanicWorkshops/MechanicWorkshops'
import MechanicVisits from '../MechanicsVisits/MechanicVisits'
import AddWorkshop from '../MechanicWorkshops/AddWorkshop/AddWorkshop'

class MechanicsDashboard extends Component {
    state = {
        activeItem: 0
    }

    renderProperItem() {
        console.log('dsadasdadadada: ' + this.props.userId)
        switch(this.state.activeItem) {
            case 0:
                return (<MechanicWorkshops userId={this.props.userId}></MechanicWorkshops>)
            case 1:
                return (<MechanicVisits userId={this.props.userId}/>)
            case 2:
                return (<div className={classes.div2}></div>)
        }
    }

    render() {
        return(
            <Aux>
                <div>
                    <div className={classes.Options}>
                        <ul style={{ listStyle: "none" }}>
                            <li><div className={classes.OptionItem} onClick={() => {this.setState({activeItem: 0})}}>Warsztaty</div></li>
                            <li><div className={classes.OptionItem} onClick={() => {this.setState({activeItem: 1})}}>Wizyty</div></li>
                            <li><div className={classes.OptionItem} onClick={() => {this.setState({activeItem: 2})}}>Opinie</div></li>
                        </ul>
                    </div>
                    <div className={classes.Content}>
                        {this.renderProperItem()}
                    </div>
                </div>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(MechanicsDashboard)