

 run the development server:


npm run dev

<!--  First add Inter which is google fonts to the layout.tsx --> for fonts 


1.const inter = Inter({ subsets: ["latin"] });  // <-- Initialize inter here!

2.import Inter  from "next/font/google";
then :
3.<html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>

# Prisma :

# 1.npm i prisma
# npx prisma init :
(initialize prisma)it will make a prisma file automatically 

Prisma is an ORM — that’s Object-Relational Mapping — but it’s way more modern 
It’s a toolkit that helps you talk to your database (like MySQL, PostgreSQL, SQLite, SQL Server, MongoDB, etc.) using TypeScript or JavaScript, without writing raw SQL queries every damn time.



# npx prisma format run
Prisma schema loaded from prisma\schema.prisma  

then run:
npx prisma migrate dev

<!-- Think migration as a time-traveling blueprint for your database. -->

# Imagine you’re building a Next.js app and you want to add a new feature — say, a “comments” table in your database.
You write a migration to create the “comments” table.

When you deploy your app or work in a team, everyone runs the same migration, ensuring their database structures stay in sync


# npm i zod :

#  a super clean way to define and validate data schemas with TypeScript support.
# Perfect for validating inputs, API requests, environment variables, etc.


#  go search : next js prisma client: (best practice for prisma and co[y the template ]) 


# install Radix UI :
Radix UI is this super clean, unstyled React component library for building accessible, headless UI components
