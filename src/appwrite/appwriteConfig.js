import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6487a4548d30ae97dcd0");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "6487a55e1e3f23cc5cc9");
