# Javascript HTML5 Video Player

Wes Bos Youtube Tutorial: [Custom HTML5 Video Player - #JavaScript30 11/30](https://www.youtube.com/watch?v=yx-HYerClEA).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Tutorial Code to play video in html.

## Screenshots

![Example screenshot](./img/video.png).

## Technologies

* Ran in Google Chrome browser with: [Javascript engine V8 7.9.317.32 for Windows (x64)](https://v8.dev/).

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* function to show play or pause button.

```javascript
function updateButton() {
  console.log('update play/pause button');
  const icon = this.paused? '►' : '❚ ❚';
  toggle.textContent = icon;
}
```

## Features

*  Controls for video volume and play-back speed.

## Status & To-Do List

* Status: Working.

* To-Do: Could add labels for video volume and play-back speed.

## Inspiration

* Wes Bos Youtube Tutorial: [Custom HTML5 Video Player - #JavaScript30 11/30](https://www.youtube.com/watch?v=yx-HYerClEA).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!