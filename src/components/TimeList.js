import React from 'react';
import { connect } from 'react-redux'; // This connects components to the store
import TimeListItem from './TimeListItem';
import selectTimes from '../selectors/times';
import Timer from './Timer'
import uuid from 'uuid'

export const TimeList = (props) => ( 
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Goals</div>
            <div className="show-for-desktop">Goals</div>
            <div className="show-for-desktop">Timers</div>
        </div>
        <div className="list-body">
        {
            props.times.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Timers</span>
                </div>
            ) : (
                props.times.map((time) => {
                    return  <div className="list-item list item--items">
                                <TimeListItem key={time.id} {...time} /> <Timer key={'Clock'} /> 
                            </div>
                })
        )

        }
        </div>
    </div>
);

const mapStateToProps = (state) => { 
    return { 
        times: selectTimes(state.times, state.filters) 
    };
};

export default connect(mapStateToProps)(TimeList); //This connects the two, the end result being the orginal component with the props from the store