import Firestore from "@google-cloud/firestore";
import dotenv from "dotenv";

dotenv.config();

let firestore;

async function initializeFirestore() {
  let serviceAccount;

  try {
    const base64String = process.env.FIRESTORE_SERVICE_ACCOUNT;
    if (!base64String) {
      throw new Error(
        "FIRESTORE_SERVICE_ACCOUNT environment variable is not defined"
      );
    }

    const decodedString = Buffer.from(base64String, "base64").toString("utf-8");
    serviceAccount = JSON.parse(decodedString);

    firestore = new Firestore({
      projectId: serviceAccount.project_id,
      credentials: serviceAccount,
    });

    console.log("Firestore initialized successfully");

    try {
      const testDoc = await firestore.collection("submissions").limit(1).get();
      console.log("Firestore test query successful:", testDoc.docs[0].data());
    } catch (error) {
      console.error("Error initializing Firestore:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error initializing Firestore:", error);
  }
}

initializeFirestore().catch((error) => {
  console.error("Error initializing Firestore:", error);
});

export default async function saveFormSubmission(submissionData) {
  if (!firestore) {
    throw new Error("Firestore is not initialized");
  }

  try {
    const docRef = firestore.collection("submissions").doc();
    await docRef.set({
      ...submissionData,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error saving form submission:", error);
    throw error;
  }
}
