# Feedget server

<p align="center">
  <img alt="Feedget Mockup" src=".github/mockup.png" width="100%">
</p>

This is the server-side of the <a href="https://github.com/josehteixeira/feedget-web">feedget widget</a>, that provides an api to receive the feedbacks and send the emails.

You can see a demo running <a href='https://feedget-web-inky.vercel.app/'>here</a>.

# Running

1. Clone this repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create .env file on root setting the DATABASE_URL parameter
    ```bash
    DATABASE_URL="file:./dev.db"
    ```
4. Create migrations using prisma
    ```bash
    npx prisma migrate dev
    ```
5. Run
    ```bash
    npm run dev
    ```