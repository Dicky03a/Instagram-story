# Project Setup and Configuration

This document provides instructions on how to set up and configure the project, specifically focusing on Database, Authentication (Auth.js), and Admin Dashboard.

## Prerequisites

- Node.js 18+ installed.
- PostgreSQL database (local or hosted, e.g., Supabase, Neon).
- GitHub account for OAuth.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Instagram-story
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Copy `.env.example` to `.env` and fill in the required values.
    ```bash
    cp .env.example .env
    ```

4.  **Database Setup:**
    Initialize the database and generate the Prisma client.
    ```bash
    npx prisma db push
    npx prisma generate
    ```

5.  **Run the application:**
    ```bash
    npm run dev
    ```

## Configuration

### 1. Database
The project uses Prisma ORM with PostgreSQL. Ensure your `DATABASE_URL` is correctly set in the `.env` file.

### 2. Authentication (Auth.js / NextAuth.js)
We use GitHub OAuth for admin authentication.

- **AUTH_SECRET**: Generate a random secret string. You can use `npx auth secret` or `openssl rand -base64 32`.
- **AUTH_GITHUB_ID**: Obtain this from your GitHub Developer Settings.
- **AUTH_GITHUB_SECRET**: Obtain this from your GitHub Developer Settings.

#### How to get GitHub OAuth Credentials:
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers).
2. Click **New OAuth App**.
3. Set **Application Name** (e.g., Portfolio Admin).
4. Set **Homepage URL** to `http://localhost:3000`.
5. Set **Authorization callback URL** to `http://localhost:3000/api/auth/callback/github`.
6. Register the application and copy the **Client ID** and **Client Secret**.

### 3. Admin Dashboard
The admin dashboard is protected via Next.js Middleware. Only authenticated users can access routes starting with `/admin`.

- **Login Route**: `/login`
- **Dashboard Route**: `/admin`

## Troubleshooting

- **Package Compatibility**: This project uses Next.js 15 and React 19. Ensure all dependencies are compatible. If you encounter issues during installation, try `npm install --force`.
- **Prisma Issues**: If you change the `schema.prisma` file, always run `npx prisma generate` and `npx prisma db push`.
