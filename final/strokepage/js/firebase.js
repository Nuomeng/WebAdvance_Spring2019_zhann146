import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  # configuration
})

// Export the database for components to use.
export const db = firebaseApp.database()
