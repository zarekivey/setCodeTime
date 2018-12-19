import React from 'react'
import ms from 'pretty-ms'
import {connect } from 'react-redux';

export class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0})
  }
  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn) ?
      <button onClick={this.stopTimer}>stop</button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.resetTimer}>reset</button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.startTimer}>resume</button> :
      null
    return(
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}

export default Timer;


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