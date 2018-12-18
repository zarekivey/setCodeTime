import React from 'react'
import moment from 'moment' 
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props) { // a constructor so that i can get access to the props
        super(props);

        this.state = {
            description: props.expense ? props.expense.description :'', // if it does exist, start it off at the same vvalue, if not start it off as an empty string
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // current time if expenses exist
            calendarfocused: false,
            error:''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }));
    }
    setupNoteState = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // The match method only runs if the value matches or there is no value . This match is so that the number can take a decimal with only two digits after it.
            this.setState(() => ({ amount }));
        } 
    };
    onSubmit = (e) => {
        e.preventDefault(); // SO the page doesnt refresh whenever we update the form 
        
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please enter a title and a duration.'}))
        } else {
          this.setState(() => ({ error: ''}))
          this.props.onSubmit({ // grabbed from AddExpense
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100, // parseFLoat, it keeps the decimals in place and turns it into a real number, * 100 becuase we're working in cents
            createdAt: this.state.createdAt.valueOf(), // This is a momoent method used to grab the real time
            note: this.state.note
        });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Title"
                    className="text-input"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    placeholder="Time"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <textarea
                    value={this.state.note}
                    className="textarea"
                    onChange={this.setupNoteState}
                    placeholder="Add a note for your timer (optional)"
                >
                </textarea>
                <div>
                    <button className="button">Save Timer</button>
                </div>
            </form>
        )
    }
}