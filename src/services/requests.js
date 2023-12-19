class Requests {
    constructor() {
        this.apiBase = 'http://49.13.31.246:9191/';
        this.routes = {
            signup: 'signup',
            signin: 'signin',
            users: 'users',
            me: 'me',
            transaction: 'transaction',
            notifications: 'notifications',
            transactionRequest: "transaction-request",
        };
    }

    // Registration
    async POST_REG_USER(data) {
        try {
            const response = await fetch(this.apiBase + this.routes.signup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    }

    // Login
    async POST_LOGIN_USER(data) {
        try {
            const response = await fetch(this.apiBase + this.routes.signin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    }

    // Get user information
    async GET_USER_DATA(data) {
        try {
            const response = await fetch(this.apiBase + this.routes.me, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': data,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    // Send information from the profile edit page
    async PUT_CHANGE_DATA(token, data) {
        try {
            const response = await fetch(this.apiBase + this.routes.me, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating user data:', error);
            throw error;
        }
    }

    // Get all users
    async GET_ALL_USERS(token) {
        try {
            const response = await fetch(this.apiBase + this.routes.users, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch all users');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    }

    // Post a transaction
    async POST_TRANSACTION(token, dataTransaction) {
        try {
            dataTransaction.userAvatar = dataTransaction.userAvatar || '';
            dataTransaction.trType = dataTransaction.trType || 'out';

            const currentDate = new Date();
            const pad = (num) => (num < 10 ? `0${num}` : num);
            const formattedDate = `${pad(currentDate.getDate())}.${pad(currentDate.getMonth() + 1)}.${currentDate.getFullYear()} ${pad(currentDate.getHours())}:${pad(currentDate.getMinutes())}`;
            dataTransaction.trDate = formattedDate;

            const response = await fetch(`${this.apiBase}${this.routes.transaction}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                body: JSON.stringify(dataTransaction),
            });

            console.log('Transaction Response:', response.status, response.statusText);

            if (!response.ok) {
                const errorMessage = `Failed to post transaction. Status: ${response.status}, Message: ${response.statusText}`;
                throw new Error(errorMessage);
            }

            return response.json();
        } catch (error) {
            console.error('Error posting transaction:', error);
            throw error;
        }
    }

    // Delete Notifications
    async DELETE_NOTIFICATIONS(token) {
        try {
            const response = await fetch(this.apiBase + this.routes.notifications, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete notifications');
            }
    
            return await response.json();
        } catch (error) {
            console.error('Error deleting notifications:', error);
            throw error;
        }
    }
    
    //Transactions Request
    async TRANSACTIONS_REQUEST(token, data) {
        try {
            const response = await fetch(this.apiBase + this.routes.transactionRequest, {
                method:"POST",
          headers:{
            "Content-Type": "application/json",
             "x-access-token": token
          },
          body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error('Transaction Request Failed')
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default Requests;
