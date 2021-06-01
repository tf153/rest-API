const fs = require("firebase-admin");

const serviceAccount = require("./key.json");

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
});
const db = fs.firestore();
const usersDb = db.collection('users');
const liam = usersDb.doc('lragozzine');  

(async function(){
    await liam.set({
    first: 'Liam',
    last: 'Ragozzine',
    address: '133 5th St., San Francisco, CA',
    birthday: '05/13/1990',
    age: '30'
    });


    await usersDb.doc('vpeluso').set({
    first: 'Vanessa',
    last: 'Peluso',
    address: '49 Main St., Tampa, FL',
    birthday: '11/30/1977',
    age: '47'
    });

    // get collection
    const users = await db.collection('users').get();

    // get document
    const liam = await db.collection('users').doc('liam').get();

    if (!liam.exists) {
    console.log('No document');
    } else {
    console.log(liam.data());
    }
})()