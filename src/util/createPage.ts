export const createPage = (title: string) => {
  const page = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/css/style.css">
            <title>우아마켓 | ${title}</title>
        </head>
        <body>
            <main id="root"></main>
            <script type="module" src="/public/frontend/index.js"></script>
        </body>
    </html>`;
  return page;
};
