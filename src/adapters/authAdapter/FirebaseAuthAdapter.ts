import { initializeApp, FirebaseApp } from 'firebase/app'
import { IAuthAdapter } from './IAuthAdapter'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  databaseUrl: process.env.NEXT_PUBLIC_DB_URL,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export class FirebaseAuthAdapter implements IAuthAdapter {
  app: FirebaseApp

  constructor() {
    this.app = initializeApp(firebaseConfig)
  }
}