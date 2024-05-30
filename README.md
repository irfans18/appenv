# Spring Boot Properties to .env Converter

This Node.js script converts Spring Boot `application.properties` files to `.env` files.

## Overview

This script is useful for projects where you need to convert Spring Boot application configuration from `application.properties` format to `.env` format, commonly used in Node.js and other JavaScript-based applications.

## Features

- Convert spring boot `application.properties` to `.env` using provided value.
- Extract spring boot key .env `application.properties` to `.env.example`.

## Usage

<!-- 1. **Install Dependencies**

   Ensure you have Node.js installed. Install project dependencies using npm:

   ```bash
   npm install
   ``` -->

1. **Run the Script**

   Execute the script with Node.js:

   ```bash
   node extract.js
   ```

   This will generate a `.env.example` file containing the extracted placeholders from `application.properties`.

2. **Run the Script**

   Execute the script with Node.js:

   ```bash
   node convert.js
   ```

   This will generate a `.env` file based on `application.properties`.

## Example

For the given `application.properties` content:

```properties
#API Config
server.port=8081
server.error.include-stacktrace=never

#JWT Config
appenv.jwt.secret_key=${APPENV_JWT_SECRET:YXBwZW52ZV9zdXBlcl9zdHJvbmdfand0X2F1dGhlbnRpY2F0aW9uX3Rva2Vu}
appenv.jwt.expirationInSecond=${APPENV_JWT_EXPIRATION:86400}
```

The generated `.env.example` file will look like:

```env
APPENV_JWT_SECRET=
APPENV_JWT_EXPIRATION=
```

The generated `.env` file will look like:

```env
APPENV_JWT_SECRET=YXBwZW52ZV9zdXBlcl9zdHJvbmdfand0X2F1dGhlbnRpY2F0aW9uX3Rva2Vu
APPENV_JWT_EXPIRATION=86400
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
