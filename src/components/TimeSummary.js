import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral'
import selectTimes from '../selectors/times'

export const TimeSummary = ({ timeCount }) => {
    const timeWord = timeCount === 1 ? 'timer' : 'timers';
    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">You currently have <span>{timeCount} {timeWord}</span></h1>
            <div className="page-header_actions">
                <Link className="button" to="/create">Add Timer</Link>
            </div>
        </div>
    </div> 
    );
};

const mapStateToProps = (state) => {
    const visibleTime = selectTimes(state.times, state.filters);

    return {
        timeCount: visibleTime.length
    };
};

export default connect(mapStateToProps)(TimeSummary)