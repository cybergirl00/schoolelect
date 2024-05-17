import {Client, Databases} from 'appwrite'

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('66322308002d490c78d6')

export const database = new Databases(client)