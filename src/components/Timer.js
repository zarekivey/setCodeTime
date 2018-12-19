import React from 'react'
import ms from 'pretty-ms'
import {connect } from 'react-redux';

export class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clock: 0,
            start: 0,
            isOn: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
        this.setState({
            clock: this.state.clock,
            start: Date.now() - this.state.clock,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            clock: Date.now() - this.state.start
        }), 1);
    }
    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({clock: 0})
    }
    render() {
        let start = (this.state.clock == 0) ?
            <button className ="button button--timer" onClick={this.startTimer}>Start</button> :
            null
        let stop = (this.state.isOn) ?
            <button className="button button--timer" onClick={this.stopTimer}>Stop</button> :
            null
        let reset = (this.state.clock != 0 && !this.state.isOn) ?
            <button className="button button--timer" onClick={this.resetTimer}>Reset</button> :
            null
        let resume = (this.state.clock != 0 && !this.state.isOn) ?
            <button className="button button--timer" onClick={this.startTimer}>Resume</button> :
            null
        return(
        <div>
            <h3>{ms(this.state.clock)}</h3>
            {start}
            {resume}
            {stop}
            {reset}
        </div>
        )
    }
}

export default Timer;

// COME BACK AND FIGURE OUT WHY THIS DOESNT WORK
// export class Timer extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//           timeCount: 0,
//           isOn: false,
//           start: 0,
//         };
//     }
//     startTimer = () => {
//         this.setState(() => ({
//         isOn: true,
//         timeCount: this.state.timeCount, 
//         start: Date.now() - this.state.timeCount
//         }));
//         this.timer = setInterval(() => {
//                 this.state.timeCount = Date.now() - this.state.start
//         }, 1);

//         // this.timer = setInterval(() => this.setState({
//         // timeCount: Date.now() - this.state.start
//         // }), 1);
//     }
//     stopTimer = (e) => {
//         const isOn = e.target.value
//         this.setState(() => ({isOn: false}));
//         clearInterval(this.timer)
//     }
//     resetTimer = (e) => {
//         const timeCount = e.taget.value
//         this.setState(() => ({timeCount: 0, isOn: false}));
//     }
//     render() {
//         let start = (this.state.timeCount == 0) ?
//             <button onClick={this.startTimer}>start</button> :
//             null
//         let stop = (this.state.timeCount == 0 || !this.state.isOn) ?
//             null :
//             <button onClick={this.stopTimer}>stop</button>
//         let resume = (this.state.timeCount == 0 || this.state.isOn) ?
//             null :
//             <button onClick={this.startTimer}>resume</button>
//         let reset = (this.state.timeCount == 0 || this.state.isOn) ?
//             null :
//             <button onClick={this.resetTimer}>reset</button>
//         return(
//         <div>
//             <h3>timer: {ms(this.state.timeCount)}</h3>
//             {start}
//             {resume}
//             {stop}
//             {reset}
//         </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     times: state.times 
// })

// export default connect(mapStateToProps)(Timer);