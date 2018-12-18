import uuid from 'uuid'
import database from '../firebase/firebase'

//ADD_EXPENSE  ACTION GENERATOR
// passing the type and expense through
export const addTime = (time) => ({ 
    type:'ADD_TIME',
    time
});

export const startAddTime = ( timeData = {}) => {
    return (dispatch, getState) => {
        // Getting the data
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0    
        } = timeData
        const time = { description, note, amount, createdAt}

        // Saving the expense object to firebase with the firebase id 
        return database.ref(`users/${uid}/times`).push(time).then((ref) => {
            dispatch(addTime({
                id: ref.key,
                ...time   
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeTime = ( { id } = {} ) => ({ // This accepts an id, if there is none it returns an empty array
    type: 'REMOVE_TIME',
    id
});

export const startRemoveTime = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/times/${id}`).remove().then(() => {
            dispatch(removeTime({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editTime = (id, updates) => ({
    type: 'EDIT_TIME',
    id, 
    updates
});

export const startEditTime = (id, updates) => {
     return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/time/${id}`).update(updates).then(() => {
            dispatch(editTime(id, updates))
        });
     };
};

// SET_EXPENSES - Grab expense data from firebase, put it into array
export const setTime = (times) => ({
    type: 'SET_TIME',
    times
});

export const startSetTime = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/times`).once('value').then((snapshot) => {
            const times = [];

            snapshot.forEach((childSnapshot) => {
                timess.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setTime(times));
        });
    };
}
