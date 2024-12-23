> this is before nodemon

> for running the file =>  npm run start

> http in post => 127.0.0.1:3000

> for installing nodemon in developer options 
```
npm i -D nodemon
```

> now we will make changes in the package.json for running file with nodemon only.

> now for running with nodemon we will use command => nodemon index.js



# dotenv

`dotenv` is a lightweight Node.js module that loads environment variables from a `.env` file into `process.env`. It helps you keep sensitive configuration details, like API keys or database credentials, out of your source code.

## Installation

Install `dotenv` using npm or yarn:

```bash
npm install dotenv
```

or

```bash
yarn add dotenv
```

## Usage

1. Create a `.env` file in the root of your project:
   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/mydb
   API_KEY=your-api-key
   ```

2. Load the `.env` file in your application by requiring `dotenv` at the top of your entry file (e.g., `index.js` or `app.js`):

   ```javascript
   require('dotenv').config();

   console.log(process.env.PORT); // 3000
   console.log(process.env.DATABASE_URL); // mongodb://localhost:27017/mydb
   ```

3. Use the environment variables in your code:

   ```javascript
   const port = process.env.PORT || 5000;
   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
   ```

## Best Practices

- **Do not commit your `.env` file**: Add it to your `.gitignore` file to keep your environment variables secure:
   ```
   .env
   ```

- **Use `.env.example` for documentation**: Create a `.env.example` file with the structure of your required variables:
   ```
   PORT=your-port
   DATABASE_URL=your-database-url
   API_KEY=your-api-key
   ```