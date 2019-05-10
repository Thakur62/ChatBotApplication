const ADODB = require('node-adodb');
ADODB.debug = true;

const databasePath = "Data Base Path";

const Connection = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${databasePath}`);

module.exports = {Connection}
