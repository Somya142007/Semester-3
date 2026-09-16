// function signup(){
//     console.log("Welcome")
//     sendConfirmationEmail()
//       sendNotification()
// }
// function sendNotificationEmail(){
//     console.log("Email sent")
// }
// function sendNotification(){
//     console.log("Send Notification")
// }
// signup()



// import EventEmitter from ("node:events");
// //create EventEmitter class instance
// const emitter = new EventEmitter()
// //event registration
// emitter.on("orderPlaced",(orderName)=>{
//     console.log("Order Placed", orderName);
//     })
//     emitter.emit("orderPlaced", orderName)



//     login = new Login();
// login.on("login successful", (username) => {
//     console.log("login successful for user", username);
// })
// login.emit("login successful", username);





import EventEmitter from 'events';
const emitter= new EventEmitter();
emitter.on("orderPlaced",(orderName)=>{
    console.log("Order Placed", orderName);
}) 
emitter.emit("orderPlaced", ()=>{
    console.log("Order Placed")
})
emitter.on("orderPlaced", () => {
    console.log("Confirmation details send")
})
emitter.on("orderPlaced", () => {
    console.log("Inventory updated ")

})
emitter.emit("OrderPlaced")
