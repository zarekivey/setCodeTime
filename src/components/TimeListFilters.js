import React from 'react'
import {connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class TimeListFilters extends React.Component { 
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value); // This puts the targeted value through the setTextFilter function
    }
    render() {
        return ( // the props from the connect, this gives us acces to info from the store, the text values
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item"> 
                    <input
                    type="text"
                    className="text-input"
                    placeholder="Search timers"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
            /></div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters // This gives us accces to props.filters.text
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(TimeListFilters);