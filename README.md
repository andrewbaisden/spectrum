# Spectrum

## Setup

Download/clone this repo and run `npm install` in both the backend and frontend folders

## Run servers

Setup Node environment with this command to set your environment to node 18

```shell
nvm use
```

### Run Backend

First create a SQLite database in `prisma/dev.db` to store the user data

```shell
pnpm --filter backend db:push
```

Use this command to start the backend server

```shell
pnpm --filter backend dev
```

### Run Frontend

Use this command to start the frontend server

```shell
pnpm --filter frontend dev
```

## Booking Page

![Booking Page](img/image01.png 'Booking Page')

## Booking Confirmation Page

![Booking Confirmation Page](img/image02.png 'Booking Confirmation Page')
