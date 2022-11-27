const firebaseErrors = {
  EMAIL_ARELADY_EXISTS: {
    errorCode: 'auth/email-already-in-use',
    errorMessage: 'Questa e-mail è già stata registrata'
  },
  WEAK_PASSWORD: {
    errorCode: 'auth/weak-password',
    errorMessage: 'La password deve essere almeno di 6 caratteri'
  },
  USER_NOT_FOUND: {
    errorCode: 'auth/user-not-found',
    errorMessage: 'Questa e-mail non è registrata'
  },
  WRONG_PASSWORD: {
    errorCode: 'auth/wrong-password',
    errorMessage: 'La combinazione e-mail e password non è corretta'
  },
  TOO_MANY_REQUEST: {
    errorCode: 'auth/too-many-requests',
    errorMessage: 'Sono stati effettuati troppi tentativi di accesso a questo account. Per favore, attendi qualche minuto e riprova.'
  }
}

export { firebaseErrors }