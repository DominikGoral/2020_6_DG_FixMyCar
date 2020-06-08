import React, { Component } from 'react'
import axios from 'axios'
import { BASEPATH } from '../../../config'
import { connect } from 'react-redux'

import classes from './WorkshopDetails.css'

import Schedule from '../Schedule/Schedule'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import WorkshopMap from '../../Map/WorkshopMap'
import Comment from '../../../components/Comment/Comment'
import Button from '../../../components/UI/Button/Button'
import { Redirect } from 'react-router'

class WorkshopDetails extends Component {
    state = { 
        NIP: this.props.match.params.id,
        City: null,
        FlatNumber: null,
        HomeNumber: null,
        Street: null,
        Category: null,
        Description: null,
        WorkshopName: null,
        latitude: null,
        longitude: null,
        actualDay: null,
        showSchedule: false,
        comments: [],
        newComment: '',
        newRate: 1
    }

    geoCode = (homeNumber, street, city) => {
        const location = homeNumber + ' ' + street + ' ' + city
        console.log(location)
        
        // axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        //     params: {
        //         address: location,
        //         key: 'AIzaSyB_JlaAtwxcfJlOQeDTI1PRUPBBxV_2dR0'
        //     }
        // })
        // .then(response => {
        //     console.log(response.data.results[0].geometry.location)
        //     const location = response.data.results[0].geometry.location
        //     this.setState({
        //         latitude: location.lat,
        //         longitude: location.lng
        //     })
        // })
        
    }

    async componentDidMount() {
        const newDate = await this.setTodayDate()
        this.setState({ actualDay: newDate})
        const comments = await this.getComments()
        this.setState({ comments: comments })
        const workshopInfo = await this.getWorkshopInfo()
        const addressData = workshopInfo.addressInfo
        const workshopData = workshopInfo.workshopInfo
        this.setState({
            Description: workshopData.Description,
            Category: workshopData.Category,
            WorkshopName: workshopData.WorkshopName,
            City: addressData.City,
            FlatNumber: addressData.FlatNumber,
            HomeNumber: addressData.HomeNumber,
            Street: addressData.Street
        })
        this.geoCode(this.state.HomeNumber, this.state.Street, this.state.City)
        const visits = this.getVisits(this.state.actualDay)
        this.setState({ visits: visits })
    }

    getComments = async() => {
        const comments = await axios.get(BASEPATH + '/comment/all', {
            params: {
                id_workshop: this.props.match.params.id
            }
        })
        console.log(comments)
        return comments.data
    }

    getWorkshopInfo = async() => {
        const workshopData = await axios.get(BASEPATH + '/workshop/' + this.props.match.params.id)
        console.log('warsztaty')
        console.log(workshopData)
        return workshopData.data
    }

    getVisits = async(data) => {
        console.log(data)
        //console.log('nip: ' + this.state.nip)
        const visits = await axios.get(BASEPATH + '/visit/all', {
            params: {
                workshop: this.props.match.params.id,
                day: data
            }
        })
        console.log('wizyty')
        console.log(visits)
        return visits.data
    }

    setTodayDate = async () => {
        let today = new Date()
        let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
        return date
    }

    addNewComment = async() => {
        await axios.post(BASEPATH + '/comment/new-comment', {
            Id_workshop: this.state.NIP,
            Id_customer: this.props.userId,
            CommentContent: this.state.newComment,
            Rate: this.state.newRate
        })
        this.setState({ newComment: '' })
        this.componentDidMount()
    }



    render() {
        if(this.props.userId) {
            return(
                <Aux>
                    <div className={classes.Map}>
                        <WorkshopMap latitude={this.state.latitude} longitude={this.state.longitude}/>
                    </div>
                    <div className={classes.WorkshopName}>
                        <p>{this.state.WorkshopName}</p>
                    </div> 
                    <div className={classes.Schedule}>
                        <Schedule nip={this.state.NIP}/>
                    </div>
                    <div className={classes.Description}>
                        <p style={{fontSize:'200%', marginLeft:'10%'}}>O nas</p>
                        <p>{this.state.Description}</p>
                    </div>
                    <div className={classes.Comments}>
                        <p style={{ fontSize: '200%' }}>OPINIE</p>
                        <textarea className={classes.CommentInput} 
                            onChange={e => this.setState({ newComment: e.target.value })}
                            rows="4"
                            cols="125"
                            placeholder="Dodaj komentarz..."
                        />
                        <p style={{float: 'left', marginLeft: '3%'}}>Ocena: </p>
                        <select className={classes.RateOptions} onChange={e => this.setState({ newRate: e.target.value })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button className={classes.NewCommentButton} onClick={this.addNewComment}>Zatwierdź</button>
                        {this.state.comments.map(comment => (
                            <Aux>
                                {/* {comment.Id_customer === this.props.userId
                                    ? <div className={classes.EditPanel}>
                                        <AiFillEdit
                                            className={classes.EditButton}
                                        />
                                        <AiFillDelete
                                            className={classes.DeleteButton}
                                        />
                                      </div>
                                    : null
                                } */}
                                <Comment
                                    CommentID={comment.CommentID}
                                    FirstName={comment.customer.FirstName}
                                    CommentContent={comment.CommentContent}
                                    Rate={comment.Rate}
                                    userId={this.props.userId}
                                    Id_customer={comment.Id_customer}
                                />
                            </Aux>
                        ))}
                    </div>
                </Aux>  
            )
        } else {
            return (<Redirect to='/auth'/>)
        } 
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(WorkshopDetails)