import React from 'react';
import { connect } from 'react-redux'; // This connects components to the store
import TimeListItem from './TimeListItem';
import selectTimes from '../selectors/times';

export const TimeList = (props) => ( 
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Timers</div>
            <div className="show-for-desktop">Timers</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.times.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Timers</span>
                </div>
            ) : (
                props.times.map((time) => {
                    return <TimeListItem key={time.id} {...time} />
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