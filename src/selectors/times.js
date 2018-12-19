// Get visible expenses,  This filters the data
import moment from 'moment';

export default (times, { text, sortBy, startDate, endDate, goal }) => {
    return times.filter((time) => {
        const createdAtMoment = moment(time.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if the startdate is the same or before the created moment by the day, if not then we dont want to filter out that way
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = time.description.toLowerCase().includes(text.toLowerCase()); // This is for text that includes what was inputed, and is case sensitive

        return startDateMatch && endDateMatch && textMatch; // if all of these are true it will be a visible expense
    }).sort((a, b) => { 
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'goal') {
            return a.goal < b.goal ? 1 : -1; // 1 means b will come first, if not -1 - a will come first
        }
    }); 
};