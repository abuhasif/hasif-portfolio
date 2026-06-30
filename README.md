# Abu Hasif Portfolio

Professional developer portfolio for Abu Hasif Bin Abu Bakar, built to showcase frontend development, UI systems, game projects, and cloud-backed web application work.

## Live Demo

* Vercel: https://hasif-portfolio.vercel.app/
* Azure Static Web Apps: https://red-pond-08afcf500.7.azurestaticapps.net/

## Overview

This portfolio is built with React, TypeScript, Vite, and Tailwind CSS. It includes responsive sections for projects, skills, experience, and contact information.

The Azure version also includes a cloud-backed contact form powered by Azure Functions and Azure Cosmos DB.

## Highlights

* Responsive portfolio layout with mobile navigation.
* Interactive project filters and expandable project details.
* Embedded project trailers for selected game projects.
* Accessible buttons, focus states, and valid external links.
* Downloadable resume link.
* Serverless contact form API using Azure Functions.
* Contact messages stored in Azure Cosmos DB.
* GitHub Actions CI/CD deployment.
* Azure infrastructure documented with Terraform.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Cloud & Deployment

* Azure Static Web Apps
* Azure Functions
* Azure Cosmos DB for NoSQL
* GitHub Actions
* Terraform
* Vercel

## Cloud Architecture

```txt
React Frontend
  ↓
Azure Static Web Apps
  ↓
Azure Functions API
  ↓
Azure Cosmos DB
```

## Project Structure

```txt
hasif-portfolio/
  src/          Frontend React components and project data
  api/          Azure Functions API
  infra/        Terraform infrastructure configuration
  public/       Static assets and resume
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the frontend locally:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## API

The Azure deployment includes API routes under:

```txt
/api
```

Current API endpoints:

```txt
GET  /api/message
POST /api/contact
```

The contact endpoint receives form submissions and stores messages in Azure Cosmos DB.

## Infrastructure

Terraform configuration is stored in the `infra/` folder.

The Terraform setup documents the Azure resources used by this project, including:

* Azure Static Web Apps
* Azure Cosmos DB account
* Cosmos DB database
* Cosmos DB container

Terraform state files and local variable files are intentionally excluded from Git.

## Checks

```bash
npm run lint
npm run build
```
