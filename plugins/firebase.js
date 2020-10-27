import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBPwX_C9FrLsoqjCqdNsSZMMzjZXf8Jwco',
    authDomain: 'slackclone2-dfa80.firebaseapp.com',
    databaseURL: 'https://slackclone2-dfa80.firebaseio.com',
    projectId: 'slackclone2-dfa80',
    storageBucket: 'slackclone2-dfa80.appspot.com',
    messagingSenderId: '1040626285355',
    appId: '1:1040626285355:web:8e018d7cfb22545842e36e',
    measurementId: 'G-M0X0DKJPFC',
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore() // データベースを定義
export { firebase, db }
