export const UPDATE_USER = 'UPDATE_USER';

export default function updateUserAction(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}