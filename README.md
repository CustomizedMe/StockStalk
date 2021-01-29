# StockStalk

A MERN stack Web-Application developed for investors, finance enthusiasts. Using StockStalk people you can analyze stocks, compare them, you can also comment about stocks. Build your profile, watch other's views on a company page or user profile and you can also see the latest financial news, all of this in real-time.
[Here is the link to the Live Project!](https://stockstalk.herokuapp.com/)

![](./client/src/Assests/img/project.gif)

## Design and Development

### Ideation

Project ideation was simple so as to create an application as one point resource for investors. Here is the mindmap of the project ideation.

![hippo](./client/src/Assests/img/Mindmap.png)
[link to Mindmap!](https://miro.com/app/board/o9J_lbEYlCo=/)


## Wireframing

### Website flow and database

MongoDB is used for Database purpose. Created Models for User, Profile of users, Comments, Company.
![hippo](./client/src/Assests/img/Application.png)

Here is the intial wireframe for the project.
![hippo](./client/src/Assests/img/wireframe.gif)

#### Technologies and APIs

Application is made using MERN stack.
The stocks data is fetched from AlphaVantage API and News data from NewsAPI.

## Running the App on local host

It is the recommended way for development, to install the packages run `npm i` or `npm install` in main folder as well in client folder

After the installation has been done, run it using command

```
npm run dev
```

which runs backend and frontend concurrently

Add your keys to the config folder inside the main folder
**default.json**: _(Contains keys and secrets)_

```
{
  "mongoURI": "mongodb+srv://XXXXXXX:XXXXXX@cluster-stockstalk.xxxxxxxx.xxxxxxx/<XXXXXX>?retryWrites=true&w=majority",
  "jwtSecret": "xxxxxxxxx",
  "alphaKeys": [
    "XXXXXXXXXXXXXXXX",
    "XXXXXXXXXXXXXXXX",
  ],
  "counter": 0,
  "newsApiKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```
