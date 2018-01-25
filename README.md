# ⚛️ React Boilerplate

This boilerplate is aimed at **lightweight** projects. If you are in need of complex state management, look into implementing [Redux](https://github.com/reactjs/react-redux).

- `yarn install` - Install dependencies
- `yarn dev` - Watch files locally for development
- `yarn build` - Build static files for production

---

The application begins inside `src/index.tsx`, and makes use of `src/index.html` as a template.

All scripts are written in _TypeScript_, with components being prefixed with `.tsx` and standard files with `.ts`. 

Code is linted via `tslint`, which is also available as various text editor plugins. This roughly makes use of Airbnb's styleguide.

- TypeScript documentation - https://www.typescriptlang.org/docs/index.html
- Airbnb styleguide - https://github.com/airbnb/javascript

## 🛣️ Defining Routes

Routes are managed via a library called _React Router_.

Inside the `render()` function, you will be able to see the various routes defined. These are parsed from `src/views/index.ts`.

When adding a route to the index, make sure you add `path` and `component` attributes respectively.

You will need to `import` them before appending them to the `export` block, otherwise an error will be thrown.

Route components can be found inside `src/views` and are defined like normal React components. Make use of the `<Helmet />` component from _React Helmet_ if you want to manipulate metadata, such as the page title.

- React Router documentation - https://reacttraining.com/react-router/web/guides/philosophy
- React Helmet repository - https://github.com/nfl/react-helmet

## 🔗 Linking to Routes

You cannot use `<a href="">` tags to link to internal pages - you need to make use of the `<Link/>` component that _React Router_ provides.

If you are looking for a link that adds styling attributes to itself when it matches the current URL, look into the `<Navlink/>` component.

- `<Link/>` documentation - https://reacttraining.com/react-router/web/api/Link
- `<NavLink/>` documentation - https://reacttraining.com/react-router/web/api/NavLink

## 📚 Defining Components

Components can be found inside `src/components`, and have an index file in similar fashion to routes.

These are stored inside folders because we bundle the style files with the template files for easy organisation.

If you are adding custom properties and state attributes, make use of TypeScript's interfaces.

- React Component documentation - https://reactjs.org/docs/components-and-props.html
- Component state documentation - https://reactjs.org/docs/state-and-lifecycle.html
- TypeScript Interface documentation - https://www.typescriptlang.org/docs/handbook/interfaces.html

## 🖼️ Using Assets

Place any assets you are using in `src/assets`, and when you need to use them, import them with `require()`. Supported file types can be found in the Webpack configuration.

Assets in production get a hash appended on at the end, so you don't have to worry about caching.

## 🎨 Adding Styles

Global styles can be found inside `src/scss`, and individual component styles should be placed inside respective component folders. You can then `@import` these into your master `style.scss`.

Styles are autoprefixed automatically.
