# Find-a-Hobby 2.0

Contributed in an Open Source project with [Rodrigo Sanchez]( https://github.com/RodriFS/).
You will need ([Find a Hobby Server]( https://github.com/alvaroha1/find-a-hobby-server)) as well.

## Table of contents
* [Idea](#idea)
* [Motivation](#motivation)
* [Tech Stack](#tech-stack)
* [Screenshots](#screenshots)
* [Getting started](#getting-started)
* [Additional Features](#additional-features)
* [Author](#author)
* [License](#license)

## Motivation
We decided to remade the whole look of the application and focus on improving the user experience.
The main objective of this project was to take an already existing project and continue working on it.
The original Find-A-Hobby was a great fit for us as a team because we both like the original idea but at the same time we thought we could take it to a whole new level.

## Tech Stack

### 1.0
* [React](https://github.com/facebook/react) - Front end library for building user interfaces
* [Bootstrap](https://github.com/twbs/bootstrap) - Framework for UI elements.
* [Onsenui](https://github.com/OnsenUI/OnsenUI) - Mobile friendly framework for responsive elements.
* [Font Awesome](https://fontawesome.com/) - Icons library. Used for the football ball, dollar sign and ballon icons.

### 2.0
* [Sass](https://sass-lang.com/) - Sass is an awesome css preprocessor.
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Unsplash](https://unsplash.com/) - Unsplash API for finding photos

## Screenshots
![login](https://github.com/alvaroha1/find-a-hobby-client/blob/master/assets/sc0.png)
![dashboard](https://github.com/alvaroha1/find-a-hobby-client/blob/master/assets/sc1.png)
![select a picture](https://github.com/alvaroha1/find-a-hobby-client/blob/master/assets/sc2.png)

## Getting started

1. Clone the repo

```
$ git clone https://github.com/alvaroha1/find-a-hobby-client.git
$ cd find-a-hobby-client
```

2. Install dependencies
```
$ npm install
```

3. Start development server
```
$ npm run main
```

4. Connect client with server.

Now you will be able to post and like hobbies with the deployed production database. 

If you want to use a clean local and fast database (recommended for development): 
1. start development server following instructions of https://github.com/alvaroha1/find-a-hobby-server
2. In /src/lib/apiClient.js, change the variable URL to point to your IP address followed by the port where you are runnning the server. For example: const URL = 'http://192.168.1.191:3000'

## Authors
* Jon Portella - [Github](https://github.com/jportella93) - [LinkedIn](https://www.linkedin.com/in/jonportella/) - [Twitter](https://twitter.com/jportella93)
* Alvaro Hernandez Assens [GitHub](https://github.com/alvaroha1) - [Linkedin](https://www.linkedin.com/in/alvaroha/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/marcoantonioghiani01/xest-client/blob/master/LICENSE) file for details
