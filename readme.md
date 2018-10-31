![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil ppopup

Stencil Popup is a standalone component for facilitate the opening of pop-up windows and obtain redirection data.


## Using this component

### In a Stencil-starters or Ionic-pwa-toolkit
- Run `npm install stencil-popup --save`
- Add an import to the npm packages `import stencil-popup;`
- Then you can use the element anywhere in your template, JSX, html etc

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/stencil-popup@latest/dist/stencil-popup.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-popup --save`
- Put a script tag similar to this `<script src='node_modules/stencil-popup/dist/stencil-popup.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## Properties

| Property       | Attribute       | Description | Type |
| -------------- | --------------- | -------------- | -------------- |
| `config`   | --  | Configuration of the pop-up window and other things.  | `object={ ... }`  |                                   |

## Properties (example): 
```
{
    button_text: "Abrir Popup",
    type: "_blank",
    popupOptions: {
      width: 600, 
      height: 679,
      top: window.screenY + ((window.outerHeight - 600) / 2.5),
      left: window.screenX + ((window.outerWidth - 679) / 2)
    }
}
```

## Events

| Event              | Detail | Description                                     |
| ------------------ | ------ | ----------------------------------------------- |
| `closedPopup`  |        | Event activated when the pop-up window was closed |
| `redirectPopup` |        | Event activated when the popup window has redirected obtaining parameters.        |


## Methods


### `open(url: string, redirectUri: string)`



#### Parameters

| Name        | Type                                   |  Optional |
| ----------- | -------------------------------------- | ----------- |
| `url`        | `string`                               |       no         |
| `redirectUri`    | `string` |     yes   |


