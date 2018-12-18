import React from 'react';
import { connect } from 'react-redux'
import TimeForm from './TimeForm'
import { startAddTime } from '../actions/times'

export class AddTimePage extends React.Component { 
    onSubmit = (time) => { 
        this.props.startAddTime(time);
        this.props.history.push('/') 
    };
    render() {
        return (
                <div>
                    <div className="page-header">
                        <div className="content-container">
                            <h1 className="page-header__title">Add Timer</h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <TimeForm 
                            onSubmit={this.onSubmit}
                        /> 
                    </div>
                </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddTime: (time) => dispatch(startAddTime(time))
});

export default connect(undefined, mapDispatchToProps)(AddTimePage);
