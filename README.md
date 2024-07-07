# Notes
1. tailwind is mobile first
2. Taking Image from outside url (remotePatterns)
```js
const nextConfig={
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'pexel.com',
            }
        ]
    }
}
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