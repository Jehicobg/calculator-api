# Calculator REST API

### Description
Endpoint for calculate math expression without external package or JS function.

## Requirements
* Node v16 or latest
* Git

## Common setup
Clone the repo and install the dependencies.

```bash
git clone https://github.com/Jehicobg/calculator-api.git
cd 
```

```bash
npm install or yarn install
```

## Steps for start server
```bash
npm run start
```
Open [http://localhost:3000/calculator](http://localhost:3000/calculator) and take a look around.

## Api Endpoints
```bash
GET http://localhost:3000/calculator // get a greeting message
POST http://localhost:3000/calculator // process math expression
```

## Steps for use calculator
* Send a POST request to:
```bash
POST http://localhost:3000/calculator
```
* with the following json body:
```bash
{
    "equation": "some equation" // example: "10*(2+5)*10"
}
```
Equation parameter must be a String.

## Steps for run test
Project has some tests case, if you want to test it, run the following command:

```bash
npm run test
```

### Limitations
* The only term separator will be the ().

### License
[MIT licensed](./LICENSE).
