

## Setup

To get started, clone the repository from [GitHub](https://github.com/mountainstar/signup-wizard). Additionally, clone the api repository [here](https://github.com/book-io/web-interview-project-signup-wizard) and follow the instructions in the README.md file. This application relies on locally running endpoints provided by the second repository.

Ensure that all dependencies are installed:

```bash
# npm
npm ci

```

## Development Server
Run the development server and automatically open it in your default browser `http://localhost:3000`:


```bash
# start the server and open in browser
npm run dev -- -o 

```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# signup-wizard

## Next steps for improvement 

- Update alerting functionality.
- Refactor code to eliminate redundancy and improve maintainability.
- add some test. I ran out of time to setup the test server :( 