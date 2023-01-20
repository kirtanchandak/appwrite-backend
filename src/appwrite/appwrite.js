import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63cac41b6533e2abfe8d");

export const account = new Account(client);

//Databse

export const database = new Databases(client, "63cac44f63d7155ad093");
