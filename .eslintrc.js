module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

// import { Controller, Post, Req, Res, HttpStatus, Headers } from '@nestjs/common';
// import * as crypto from 'crypto';
// import axios from 'axios';
// import { ShopifyAPI } from 'shopify-api'; // Add this import statement

// const API_KEY = '60c9e3d05f945f07121845cda934250c';
// const ACCESS_TOKEN = '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';
// const STORE_DOMAIN = 'quick-start-359e8f16.myshopify.com';

// @Controller('webhook')
// export class ShopifyWebhookController {
//   private readonly CLIENT_SECRET =
//     'c911300af2e3d8841ec77ffe22dc22e87740c6e9692224c93023e32b59156e0b';

//   @Post('customers_create')
//   async handleWebhook(@Req() request, @Res() response, @Headers('x-shopify-hmac-sha256') hmacHeader) {
//     try {
//       const rawBody = request.body;
//       console.log('Raw Body:', rawBody);

//       // Verify webhook authenticity
      const computedHmac = crypto
//         .createHmac('sha256', this.CLIENT_SECRET)
//         .update(JSON.stringify(rawBody))
//         .digest('base64');

//       const isValid = crypto.timingSafeEqual(
//         Buffer.from(computedHmac, 'base64'),
//         Buffer.from(hmacHeader, 'base64'),
//       );

//       if (!isValid) {
//         console.error('Webhook verification failed.');
//         return response
//           .status(HttpStatus.UNAUTHORIZED)
//           .send('Webhook verification failed.');
//       }

//       console.log('Webhook verified successfully.');

//       // Retrieve payload from the request body
//       const payload = rawBody;
//       console.log('Payload:', payload);

//       // Access Shopify API using provided credentials
//       const shopifyAPI = new ShopifyAPI({
//         shopName: STORE_DOMAIN,
//         apiKey: API_KEY,
//         password: ACCESS_TOKEN,
//       });

//       // Example: Retrieve customer data using Shopify API
//       const customerId = payload.id; // Assuming payload contains customer ID
//       const customerData = await shopifyAPI.get(`/admin/api/2021-09/customers/${customerId}.json`);

//       console.log('Customer Data:', customerData);

//       // Perform operations with the payload and customer data
//       // Save the payload or customer data to your desired storage or perform any required actions

//       return response
//         .status(HttpStatus.OK)
//         .send('Webhook payload processed successfully.');
//     } catch (error) {
//       console.error('Error handling webhook:', error);
//       return response
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .send('An error occurred while handling the webhook.');
//     }
//   }
// }

