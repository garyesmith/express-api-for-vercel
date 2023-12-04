# Node Express Sample Blog API

This repository implements a Node/Express API that serves up static sample blog post data, configured for deployment on Vercel.

This API is intended for use as a back-end to serve data to the front-end code in my [NextJS Blog](https://github.com/garyesmith/nextjs-blog) repository.

Live Vercel Deployment: https://express-api-for-vercel-garyesmith.vercel.app/posts

## Usage

### Dependencies

- Node (tested with v16.10.0)
- NPM (tested with v7.24.1)

### To Install

- `npm install`

### To run in development

- `node index.js`

### Endpoints 

- GET `http://localhost:3000/` for API status.

- GET `http://localhost:3000/posts` for sample blog data.

## Credit

Thank you to this [simple guide](https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel) for the handy tips about configuring Vercel to deploy an Express app.
