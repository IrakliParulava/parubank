import { action, makeAutoObservable, observable } from "mobx";

class ContactsStore {
    users = [];

    constructor() {
        makeAutoObservable(this, {
            users: observable,
            addUsers: action
        })
    }

    addUsers(item) {
        const usersArray = item.filter(
            obj => obj.avatar !== null && obj.avatar !== ""
        )
        this.users = usersArray;
    }

    getFilteredUsers(value) {
        return this.users.filter(user =>
            user.username.toLowerCase().includes(value.toLowerCase())
        );
    }
}

const contactsStore = new ContactsStore();
export default contactsStore;