<h1> Spotipy App </h1>
Create React App for final project Generasi gigih 

### Features
- Login with spotify account
- search track songs spotify
- select songs
- create playlist 
- show playlist
- show artist 

### Built With

1. [Create React App](https://create-react-app.dev/) to initialize the project.
2. Written in Javascript and [Typescript](https://www.typescriptlang.org/) 
3. [Chakra-UI](https://chakra-ui.com/)
4. [React Redux](https://react-redux.js.org/) for state management
5. [React Router](https://reactrouter.com/) for routing
6. [Axios](https://github.com/axios/axios), for making API calls
8. [MSW](https://mswjs.io/), for creating API mock
9. Deployed on [Vercel](https://vercel.com/)

### Installation

1. Clone repo to your local machine. After it finished, open the folder and install project dependencies. You can do this from your command line/terminal :

```bash
# Clone this repository
$ git clone https://github.com/yaminmuhammad/tugas-hw.git
```

```bash
# Install dependencies and node module
$ npm install 
```

2. Insert your spotify key to `REACT_APP_SPOTIFY_CLIENT_ID` and redirect to `http://localhost:3000/callback/` for `REACT_APP_SPOTIFY_REDIRECT_URI` in `.env` file.

3. Run the app

```bash
$ npm start
```

4. Open `http://localhost:3000` to view the app in your browser
