# KoinX Assignment

A Node.js application that tracks cryptocurrency prices and provides statistical analysis through REST APIs. The application fetches real-time data for Bitcoin, Matic, and Ethereum from CoinGecko API and stores it in a database for analysis.

## Features

- Automated background job to fetch cryptocurrency data every 2 hours
- Real-time price statistics API endpoint
- Statistical analysis endpoint for price deviation calculations
- Support for Bitcoin, Matic, and Ethereum

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git https://github.com/bhaveshAswani112/KoinXTask.git
cd KoinXTask
```

2. Install dependencies:
```bash
npm install
```

3. Rename  `.env.example` to `.env` file in the root directory and fill the env variables:


## Project Structure

```
src/
├── services/      
├── controllers/    
├── routes/                 
└── db/         
```

## API Documentation

### 1. Get Cryptocurrency Statistics
Retrieves the latest data for a specified cryptocurrency.

```
GET /api/v1/stats
```

Query Parameters:
- `coin` (required): Cryptocurrency identifier (bitcoin, matic-network, or ethereum)

Example Response:
```json
{
    "price": 45000,
    "marketCap": 850000000000,
    "24hChange": 2.5
}
```

### 2. Get Price Deviation
Calculates the standard deviation of prices for the last 100 records.

```
GET /api/v1/deviation
```

Query Parameters:
- `coin` (required): Cryptocurrency identifier (bitcoin, matic-network, or ethereum)

Example Response:
```json
{
    "coin": "bitcoin",
    "deviation": 4082.48
}
```

## Background Job

The application includes a background job that:
- Runs every 2 hours
- Fetches current prices from CoinGecko API
- Stores data in MongoDB for analysis


## Development

Start the development server:
```bash
npm run dev
```


## Production Deployment

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- node-cron (for scheduling)
- Axios (for API requests)
