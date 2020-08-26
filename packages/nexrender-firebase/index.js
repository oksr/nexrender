
const admin = require("firebase-admin");
const serviceAccount = require("./cred.json");
const { resolve } = require("path");
const { rejects } = require("assert");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://feedboss-2020.firebaseio.com"
});

const db = admin.firestore();

module.exports = (job, settings, action, type) => {
    return new Promise((resolve, reject) => {
        const docRef = db.collection(`users/${action.uId}/exports`).doc(`${action.docId}`);
        docRef.update({
            res: `${action.s3_input}`
        }).then(function(docId) {
            console.log("Document written with ID: ", docId);
        });
        resolve(job);
        console.log("sucssess firebase module");
    }).catch((error) => {
        throw error
      })
}





