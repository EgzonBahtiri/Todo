import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6489071dd144feacd5a8");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "6489071dd144feacd5a8");
