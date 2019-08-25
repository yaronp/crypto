# Backend - Cryptocurrency API 
Create a webapp (Node.js+express or Java+spring) which acts as Cryptocurrency API Proxy.
The server should request results from an external api (www.cryptocompare.com/api).
The results should be cached and stored in-memory, using data structures of your choice. 
The currency should be cached for a configurable amount of time (AKA cachettl, default is 15000ms) – after ttl the currency value is outdated and invalid.
 

The following REST API for digital coins should be implemented:
*	GET    /coins  list all coins names (coinName only)

    ?algorithm=<…> return coins with the desired algorithm
    ?symbol=<…>,<…>,…  returns coins with desired symbol/s
    
* 	GET    /coins/:symbol  return single coin with all properties, including currency
* 	POST /cachettl  {“ttl”: <number>}  change the cachettl for items currency.
 
    returns old value (oldValue) and updated value (newValue).

    should be protected by validating “x-admin-key” header has a valid key (in admin-key file)  

Coins should have the following properties:

•	id: number (1182),

•	symbol: string ("BTC"),

•	coinName: string ("Bitcoin"),

•	algorithm: string ("SHA256"),

•	toUSD: float (12684.72),

•	additional properties if needed…

## External API - (www.cryptocompare.com/api)
The desired API should be implemented by using 2 external API requests:

•	https://min-api.cryptocompare.com/data/all/coinlist  list all coins w/o currency

•	https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=USD  get currency by symbol, note that it supports multiple symbols: <symbol>,<symbol>,<symbol>


## Frontend – Master/Detail view
 
Build a web client application that interact with the API.

The client should have a single page, master/detail view with a list of coins and a detailed view for some single coin. It should look as follows (UI is not important, functionality matters):

Bitcoin (BTC) 
Ethereum (ETH) 
…
…


The list should be loaded on start (GET /coins), without any coin selected.

Clicking on some coin in the list, will show it’s details (GET /coins/:symbol) in the detailed view.

The search box will receive input for symbol or algorithm and uses the exposed API to show results (GET /coins?algorithm=<..>&symbol=<..>)

Notes:

•	You can use any framework you wish (Angular, React, SAPUI5 ) or plain Javascript / jQuery

•	Same applies for UI kits (Bootstrap)

•	If the backend is missing / not working, use plain json files to load data from

o	Use the external API (www.cryptocompare.com/api) to create the json files manually

o	Calling the external API directly from your client side code is not allowed
 
o	Search mechanism would be executed on the data within the given list in client side

# Instructions:
•	Your solution should provide answers with minimum requests from the external API

    o	Log all external API requests
    
•	Write down any important decisions and assumptions you are taking during the coding process

•	Try to understand the problem and its attributes and prepare a short design for your most efficient solution represented in your preferred diagram (block, sequence, etc.)

    o	Describe each object, interface and the relations between them
    o	Explain the data structures in your solution

## Tips:
* 	A working but partial implementation is better than a partially working implementation
*	Write your app modular as possible, it will help in case you won’t finish some parts
o	Keep logic, utilities and persistency in separate modules
*	Test your implementation using a REST client and (if time allows,) unit tests

*	For Node.js, you may use any npm package in your implementation (express is a must)


