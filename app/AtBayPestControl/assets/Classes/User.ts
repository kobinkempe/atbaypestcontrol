// Each User will have a Plan, and information. The payment information can't be stored on the database, but I think
// I read there's a way to have an internal database as well, and this class would be in charge of reading that as well
// Also the user information will determine all the state details of the app

import Plan from "./Plan";
import Equipment from "./Equipment";
import Product from "./Product";

export default class User {
    // If this is 0, that should mean they haven't made an account yet
    private id: number
    constructor(id:number = 0){
        this.id = id;
    }
    hasAccount = () => {
        return this.id != 0
    }
    getPlan = () => {
        //TODO
        return new Plan(0)
    }
    hasEquipment = (equipment:Equipment) => {
        //TODO
        return true;
    }
    hadEquipment = (equipment:Equipment) => {
        // This returns true if the user once had the equipment, but it has been removed
        //TODO
        return false;
    }
    removeEquipment = (equipment:Equipment) => {
        // This removes the equipment from the list of equipment the user has, but adds it to a list of equipment
        // the user once owned
        //TODO
    }
    addEquipment = (equipment:Equipment) => {
        // This adds the equipment to the list of equipment the user has, and also adds it to the upcoming
        // purchases in the plan
        //TODO
    }
    addHasEquipment = (equipment:Equipment) => {
        // This ONLY adds the equipment to the list of equipment the user has
        // TODO
    }
    makePayment = (price:number) => {
        // TODO: but not related to the database
        console.log("Pay $" + price )
    }
    setMonthlyPayments = (price:number, nextDate:Date) => {
        // Note: the date of nextDate should be <= 28
        // TODO: but not related to the database
        console.log("Next Payment: $" + price + " on " + nextDate)
    }
    purchaseItems = (item:(Product|Equipment)[]) => {
        // Sends the list of items that the user has purchased (separate from the plan) to the client
        // TODO
        console.log("Purchased")
    }
}