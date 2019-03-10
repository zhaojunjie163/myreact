
import $ from 'jquery';

export const UPDATE_USER = 'UPDATE_USER';
export const API_REQUEST_ERROR = 'API_REQUEST_ERROR';

export function updateUserAction(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}


function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'error'
        }
    }
}


export function apiRequest() {
    return dispatch => {

        $.ajax({
            url: 'http://google.com',
            success(){
                console.log('success');
            },
            error(){
                dispatch(showError());
            }
        });
    }
}


