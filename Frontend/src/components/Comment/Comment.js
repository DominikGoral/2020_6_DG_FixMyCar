import React, { Component } from 'react'
import { AiFillEdit, AiFillDelete, AiFillStar } from "react-icons/ai";

import classes from './Comment.css'
import axios from 'axios';
import { BASEPATH } from '../../config';

class Comment extends Component {
    state = {
        comment: this.props.CommentContent,
        rate: this.props.Rate,
        editMode: true
    }


    editComment = () => {
        axios.put(BASEPATH + '/comment/' + this.props.CommentID, {
            CommentContent: this.state.comment,
            Rate: this.state.rate
        })
    }

    editButtonHandler = () => {
        if(this.state.editMode === true) {
            this.setState({ editMode: false })
        } else {
            this.setState({ editMode: true })
            this.editComment()
        }
    }

    deleteButtonHandler = () => {
        axios.delete(BASEPATH + '/comment/' + this.props.CommentID)
    }

    render() {
        const stars = []
        for(let i = 0; i < this.state.rate; i++) {
            stars.push(<AiFillStar/>)
        }
        return(
            <div className={classes.Comment}>
                {this.props.userId === this.props.Id_customer
                    ?   <div className={classes.EditPanel}>
                            <AiFillEdit
                                className={classes.EditButton}
                                onClick={this.editButtonHandler}
                            />
                            <AiFillDelete
                                className={classes.DeleteButton}
                                onClick={this.deleteButtonHandler}
                            />
                        </div>
                    : null
                }
                {/* <div className={classes.Rating}>
                    <input type="radio" name="star" id="star1"/><label for="star1"><AiFillStar/></label>
                    <input type="radio" name="star" id="star2"/><label for="star2"><AiFillStar/></label>
                    <input type="radio" name="star" id="star3"/><label for="star3"><AiFillStar/></label>
                    <input type="radio" name="star" id="star4"/><label for="star4"><AiFillStar/></label>
                    <input type="radio" name="star" id="star5"/><label for="star5"><AiFillStar/></label>
                </div> */}
                <div>
                    <p className={classes.FirstNameInfo}>{this.props.FirstName} &nbsp;</p>
                    <p className={classes.RateStars}>{stars}</p>
                </div>
                <input 
                    value={this.state.comment}
                    onChange={e => this.setState({ comment: e.target.value })}
                    disabled={this.state.editMode}
                />
            </div>
        )
    }
}

export default Comment