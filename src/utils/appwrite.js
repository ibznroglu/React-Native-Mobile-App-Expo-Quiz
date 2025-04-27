import { Client, Account } from 'react-native-appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('678d90e30034984c6398')
    .setPlatform('com.isa.infoChallenge');

const account = new Account(client);

export default account; 
