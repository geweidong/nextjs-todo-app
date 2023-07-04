This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, install all the dependencies:
```bash
npm install
```

Then, create a `.env` file with the following contents:

```
# https://cloud.mongodb.com/v2/5b220dc5d383ad45a4104b3e#/clusters
DATABASE_URL=""

# https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=""

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Then, init the prisma client:
```bash
npx prisma db push
```

And run the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Full stack

- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)
- [tailwindcss](https://tailwindcss.com/)
- [next-auth](https://next-auth.js.org/)
- [zustand](https://github.com/pmndrs/zustand)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
