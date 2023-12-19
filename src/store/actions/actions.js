export const getUserData = (data) => ({
    type: 'GET_USER',
    userData: data
});
export const getUsersData = (data) => ({
    type: 'GET_USERS',
    usersData: data
});
export const sentTransaction = () => ({
    type: 'SENT_TRANSACTION'
});
