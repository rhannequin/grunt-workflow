grunt-workflow
==============

Workflow and architecture to start a new frontend project with.

## Architecture

### Development

```
app/
|_ assets/
   |_ fonts/
   |_ images/
   |_ scripts/
      |_ app.js
   |_ styles/
      |_ sass/
        |_ _partials/
           |_ _fonts.scss
        |_ app.scss
|_ index.html
```

### Built application
```
dist/
|_ assets/
   |_ fonts/
   |_ images/
   |_ scripts/
      |_ app.js
   |_ styles/
      |_ app.css
|_ index.html
```

## Somes tasks the app does

### jshint

Syntax check of every JavaScript files from `app/assets/scripts/` and main JSON files.

### sass

Compile `app/assets/styles/app.scss` into `app/assets/styles/app.css`.

### concat

Concatenate all `*.css` files into `dist/assets/styles/app.scss` and all `*.js` files into `dist/assets/scripts/app.js`.

### copy

Copy fonts and images from `app/assets/` to `dist/assets/`

### imagemin

Optimize images from `dist/assets/images/`.

### connect

Launch a local server.

### watch

Watch for file updates.

### replace

Replace elements from `app/` to `dist/` with environment values.

### open

Open the default browser to the local server address.

### uglify

(Only for build task) Minify JavaScript files.

### cssmin

(Only for build task) Minify CSS files.