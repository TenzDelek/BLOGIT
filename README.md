# Notes

1. tailwind is mobile first
2. Taking Image from outside url (remotePatterns)

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pexel.com",
      },
    ],
  },
};
```

3. copyright can be get as &copy;
4. A great approach to make container
   - at layout we make container so that there will be a max-w for not getting strech
5. nextjs default behaviour is server components(many benifit like fetching)

- usually in react we use useeffect to fetch but in next we can directly do it by declaring the function async
  **usually used for only GET**

6. the pathname logic : if href match pathname then change colour
7. crtl+P to shortcut open file
8. SERVER ACTION IS USED FOR POST/PUT/DELETE
9. so the traditional route handler(api) is used for webhook only in next
10. in dynamic route = when we want to have access of url param we can pass
    params(predefine)like children to get access of it(see post [id])
11. the loading.tsx file will auto make the suspense for you (in next.js)

- but sometime we dont use loading.tsx but we use **suspense** itself with its fallback
  as we dont want whole file to wait while we call a api , we only want that part to be in
  loading and not all the static.

12. becarefull while client and server.
    all the interactivitly are client and if you make the page.tsx client they you will loose the server functionalities like fetch and all. so best is to use seperate components for it and import it seperately

13. for form and input, a good trick is make the input and buttons hfull and then at the form we can give the height like h10
14. name is important in input for backend related fetch

# form action(server action)

- traditionally what we used to do is submit the form and create a onsubmit and call fetch for the api route
- but in nextjs we have a new way of doing it call server action.
- in form we use action={afuncname} that function will only run on server

# creating a seperate folder for actions

- it is recommended to put all the server action function at a one place , "we only have to use "use server" one time that way.
- remember the function need to be async
- then next js gives you a special prop formData
  which you can use to extract the detial
  we do it through name that we gvie to the input

```js
const title=formData.get("title") as string;
console.log(title)
```

- you can look at the network(in browser) when we submit (a fetch call will happen)
  **nextjs made everything so abstract**

# remember

- get - can be directly done at server componenet (like fetching data , findmany())
- post/put/del - uses server action (actions.ts)

# database (PRISMA ORM)

- so we dont directly talk with db, orm does that (drizzle,prisma,mongoose)
- we will use prisma
  > npm i prisma -save-dev
  > npx prisma init --datasource-provider sqlite
  > we go with sqlite but you can choose any
  > a folder will generate

15. this is how we create schema

```js
model Post {
  id    Int    @id @default(autoincrement())
  title String
  body  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

16. when ever prisma schema and all change we need to run this code
    > npx prisma db push
    > this will process the changes in db
    > this will create a dev.db

## to view the schema

> npx prisma studio

### instantiating prisma

- currently you cant use prisma like
  > prisma.post.create({})
- create a lib and db.ts
  go to the docs [docs](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices) and copy the db.ts
- now you can import this in your file where you are using prisma variable

## WRITING

```js
//adding to db or updating for db
await prisma.post.create({
  data: {
    title,
    body,
  },
});
```

## while deploying

make sure in package.json script you have

> "postinstall": "prisma generate"
