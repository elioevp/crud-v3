//import { createPool } from "mysql2/promise";

// mysql server centos9, 192.168.1.115,  docker container,  db:companydb, table: customer 
//export const pool = createPool({
//  host: "192.168.1.115",
//  user: "root",
//  password: "12345678",
//  port: 3306,
//  database: "companydb",
//});


// mysql server ubuntu, 192.168.1.120,  db:customersdb,  table:customer
//export const pool = createPool({
//  host: "192.168.1.120",
//  user: "elioevp",
//  password: "Saul202025*",
//  port: 3306,
//  database: "customersdb",
//});



// mysql server win, localhost, db:crudnode1, table:customer 
//export const pool = createPool({
//  host: "localhost",
//  user: "root",
//  password: "saul123",
//  port: 3306,
//  database: "crudnode1",
//});

import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});



