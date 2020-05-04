import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'


class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthenticated} mechanic={this.props.mechanic} customer={this.props.customer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        customer: state.auth.customer,
        mechanic: state.auth.mechanic
    }
}

export default connect(mapStateToProps)(Layout)