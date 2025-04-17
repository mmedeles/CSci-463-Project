## Server Setup (Important for Teammates)

If you're having issues starting the Symfony backend (e.g., missing `public/index.php`), download the provided zipped `server/` directory from the team lead.

### Steps:
1. Delete your existing `server/` folder
2. Replace it with the contents of the zipped `server/` folder
3. Inside the new `server/`:
   - Run `composer install`
   - Start server: *Built-in-Web-Server*
4. Visit [http://localhost:8000](http://localhost:8000)

## Making new pages
1. Use this command to setup the files needed for new pages
   
   ```ng generate component pages/{page_name}```
   2. component.html
   3. component.scss
   4. component.ts
2. Add the route (app.module.ts)
3. Update the component.ts to navigate to correctly
4. Import appropriate modules, routes, pages
4. Add ts functionality (.ts)
5. Add Styling (.scss)