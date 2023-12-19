import { makeAutoObservable } from "mobx";

class SendMoneyStore {
    userId = "";
    amount = "";
    userName = "";
    userAvatar = "";
    trDate = "";
    trType = "out";
    userContact = [];

    constructor() {
        makeAutoObservable(this);
    }

    addUserContact(item) {
        this.userContact.push(item);
        console.log("sendContact", this.userContact)
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

const sendMoneyStore = new SendMoneyStore();
export default sendMoneyStore;