import { makeAutoObservable } from "mobx";

class RequestMoneyStore {
    amount = "";
    userName = "";
    userAvatar = "";
    trDate = "";
    trType = "request";
    userId = "";
    userContact = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUserContact(item) {
        this.userContact.push(item);

    }

    setAmount(amountPage) {
        this.amount = amountPage;

    }

    setTrDate(trDatePage) {
        this.trDate = trDatePage;

    }

    getDataForRequest() {
        const userContact = this.userContact.find(item => item._id === this.userId);
        if (!userContact) return null;

        return {
            amount: +this.amount,
            userName: userContact.username,
            userAvatar: userContact.avatar,
            trDate: this.trDate,
            trType: this.trType,
            userId: this.userId
        };
    }
}

const requestMoneyStore = new RequestMoneyStore();
export default requestMoneyStore;
