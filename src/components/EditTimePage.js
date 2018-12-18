import React from 'react';
import { connect } from 'react-redux';
import TimeForm from './TimeForm';
import { startEditTime, startRemoveTime } from '../actions/times';

export class EditTimePage extends React.Component {
    onSubmit = (time) => {
        this.props.startEditTime(this.props.time.id, time);
        this.props.history.push('/'); 
};
onRemove = () => { 
    this.props.startRemoveTime({ id: this.props.time.id });
    this.props.history.push('/');
}; 
render() {
    return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Your Timer</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TimeForm
                        time={this.props.time}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--grey" onClick={this.onRemove}>Remove Timer</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    time: state.times.find((time) => time.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditTime: (id, time) => dispatch(startEditTime(id, time)),
    startRemoveTime: (data) => dispatch(startRemoveTime(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTimePage);
