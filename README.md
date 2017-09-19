# Node GraphQL events

Simple boilerplate to start with GraphQL server wrapping some REST APIs.

## Getting Started

You can read [my post on Medium](https://medium.com/@ddelfio/rest-api-or-graphql-that-is-the-question-f41c0991d3c8)


### Installing & run

To install and run it you need to:

* npm install
* npm run json:server
* npm run dev:server

The command lines before are configured in package.json file
```
"scripts": {
    "dev:server": "nodemon server.js",
    "json:server": "json-server --watch persistence/db.json"
}
```
[nodemon](https://github.com/remy/nodemon) is an useful tool that will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application

## The steps explained

```
npm run json:server
```
It will start the **json-server** that will expose our REST API on http://localhost:3000

Pointing your browser to http://localhost:3000/events, you will obtain:


<a href="#">
    <img src="https://github.com/danilodelfio/node-graphql-events/blob/master/imgs/rest-api.png?raw=true" title="REST API"/>
</a>

With another terminal you can launch the GraphQL server with the command:

```
npm run dev:server
```

This command will start our express-graphql server on port 4000. Pointing your browser to http://localhost:4000/http://localhost:4000/graphql you can start writing your requests. The GraphiQL tool let us to interrogate our GraphQL server with autocomplete and a navigable documentation (on the right of the window).
Below a simple example from the example:

<a href="#">
    <img src="https://github.com/danilodelfio/node-graphql-events/blob/master/imgs/graphiql.png?raw=true" title="GraphiQL"/>
</a>
