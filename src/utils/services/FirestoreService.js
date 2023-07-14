import { db } from '../firestore'
function getAllMenuItems() {
    return new Promise((resolve, reject) => {
        db.collection("MenuItems").get().then((allMenuItems) => {
            resolve(allMenuItems);
        }).catch((e) => {
            reject(e);
        })
    })
}
function getAllMenuCategories() {
    return new Promise((resolve, reject) => {
        db.collection("MenuCategories").get().then((allMenuCategories) => {
            resolve(allMenuCategories);
        }).catch((e) => {
            reject(e);
        })
    })
}
function AddNewMenuItem(itemName, itemCategory, itemDescription, itemPrice, itemQuantity) {
    return new Promise((resolve, reject) => {
        const data = {
            "itemName": itemName,
            "itemCategory": itemCategory,
            "itemDescription": itemDescription,
            "itemPrice": parseFloat(itemPrice),
            "itemQuantity": parseFloat(itemQuantity)
        }
        db.collection("MenuItems").add(data).then((docRef) => {
            resolve(docRef);
        }).catch((e) => {
            reject(e);
        })
    })
}
function UpateMenuItem(menuItemID, itemName, itemCategory, itemDescription, itemPrice, itemQuantity) {
    return new Promise((resolve, reject) => {
        const data = {
            "itemName": itemName,
            "itemCategory": itemCategory,
            "itemDescription": itemDescription,
            "itemPrice": parseFloat(itemPrice),
            "itemQuantity": parseFloat(itemQuantity)
        }
        db.collection("MenuItems").doc(menuItemID).update(data).then(() => {
            resolve()
        }).catch((e) => {
            reject(e)
        })
    })
}
function DeleteMenuItem(menuItemID) {
    return new Promise((resolve, reject) => {
        db.collection("MenuItems").doc(menuItemID).delete().then(() => {
            resolve()
        }).catch((e) => {
            reject(e)
        })
    })
}
export default { getAllMenuItems, getAllMenuCategories, AddNewMenuItem, UpateMenuItem, DeleteMenuItem }