# Spectrum

## Setup

Download/clone this repo and run `pnpm install` from the root of the `spectrum` folder to install the dependencies.

## Running the app

First create a `.env` file and put it inside of the `backend` folder with these key variables:

```shell
DATABASE_URL="file:./dev.db"
PORT=4000
```

This is the url for our SQLite database and also the main port number for our backend Nest.js server.

Now run this command to setup your Node environment to node 18

```shell
nvm use
```

### Run Backend

First create an SQLite database in `prisma/dev.db` to store the user data with this command:

```shell
pnpm --filter backend db:push
```

Now use this command to start the backend server:

```shell
pnpm --filter backend dev
```

### Run Frontend

Lastly use this command to start the frontend server:

```shell
pnpm --filter frontend dev
```

You can see what the app looks like in these screenshots:

## Booking Page

![Booking Page](img/image01.png 'Booking Page')

## Booking Confirmation Page

![Booking Confirmation Page](img/image02.png 'Booking Confirmation Page')
