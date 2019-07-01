/**
 * Return a connection to the Firestore DB
 */
const admin = require("firebase-admin");
var serviceAccount = require("../gcloud-service-account.json");
let DB;

module.exports = function() {
  if (DB) return DB;

  admin.initializeApp({
    // credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT)
    credential: admin.credential.cert(serviceAccount)
    // credential: admin.credential.cert(JSON.parse("../gcloud-service-account.json"))
  });

  DB = admin.firestore();
  DB.settings({ timestampsInSnapshots: true });
  return DB;
};
