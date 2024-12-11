# AzureFunctionsAzureOpenAIPpt

This project demonstrates how to create a presentation using reveal.js and Azure Functions.

## Project Setup

1. **Create the project folder:**
    ```sh
    mkdir AzureFunctionsAzureOpenAIPpt
    cd AzureFunctionsAzureOpenAIPpt
    npm start
    ```

2. **Create essential files:**
    - `index.html`
    - `index.js`

3. **Configure settings for format on save:**
    - Create `settings.json` with the desired configuration.

4. **Fill `index.html` with HTML5 boilerplate:**
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Azure Functions Azure OpenAI Presentation</title>
         <link rel="stylesheet" href="node_modules/reveal.js/dist/reveal.css">
         <link rel="stylesheet" href="node_modules/reveal.js/dist/theme/white.css">
    </head>
    <body>
         <div class="reveal">
              <div class="slides">
                    <section>Slide 1</section>
                    <section>Slide 2</section>
              </div>
         </div>
         <script src="node_modules/reveal.js/dist/reveal.js"></script>
         <script src="index.js"></script>
    </body>
    </html>
    ```

5. **Install reveal.js:**
    ```sh
    npm install reveal.js
    ```

6. **Initialize reveal.js in `index.js`:**
    ```js
    import Reveal from 'reveal.js';

    let deck = new Reveal();
    deck.initialize();
    ```

7. **Add reveal.js stylesheets and scripts:**
    - Stylesheets are added in the `<head>` section.
    - Scripts are added at the end of the `<body>` tag.

8. **Attempt to initialize the project with lite-server:**
    - Realized that lite-server is not a module bundler and cannot use `import Reveal from 'reveal.js'`.

9. **Change `index.js` to use absolute URL with `node_modules`:**
    ```js
    import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
    let deck = new Reveal({
        plugins: [],
    });
    deck.initialize();
    ```

Now you can run the project using lite-server and access the presentation.