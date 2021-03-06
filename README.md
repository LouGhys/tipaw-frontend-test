[![Netlify Status](https://api.netlify.com/api/v1/badges/83e11d6c-1edb-454c-a65c-191a93030bf7/deploy-status)](https://app.netlify.com/sites/serene-shockley-d25644/deploys)

Demo available [here](https://serene-shockley-d25644.netlify.app/)

# Tipaw Pro List - Lou Ghys

This is a simple app to display the list of professions from Tipaw. When you find one you're interested in you can get more details.

This application has been created using [Create React App](https://github.com/facebook/create-react-app)

To complete the assessment:

1. Clone this repository and navigate to it
2. Run `npm install`
3. Run it locally: `expo start`
4. Read the [issues](./issues) description
5. Solve or implement the [issues](./issues). Preferably create branches or merge requests per issue in order to review the changes in isolation 🙂
6. Upload your solution to a personal repository (Gitlab or Github) and send us the link so we can review everything.

Feel free to remove, add or refactor any component or the project itself. Show us how you'll bring a small idea closer to production 💪

*Bonus points if you can deploy your solution so we can view it in the browser directly.*

## GraphQL Note

This app makes use of the GraphQL for data fetching form tipaw. Please see https://api-pro.app.tipaw.com/app for API docs.

In this assessment we will only make use of the `prosGetMany` and `prosGetOne` queries.

Feel free to test your queries in the browser

# My approach

## 1: Refactoring

Here's a list of thing I did as soon as I got the project

#### Typescript support

A must in the modern day web developement world

#### index files for every module

Having index files for modules does not only greatly help with import, but with folder structure aswell. A module can have subcomponents that can all be export under the index file

#### functions to lamda functions

For most cases, especially in functional programming, lamda functions would be my go-to. You don't have to worry about binding or context, small lamda functions like in array.filter or array.map can be written in less lines. However they are not a replacement for full functions, and should be used in the right context.

#### no export defaults

This ties in with the index files, where it is much easier to import/export without having any default export, and with default exports, you don't get to enforce naming convetions (which should be enforced imo for exports).

#### Apollo typescript support (codegen)

This great cli enable great typescript support with apollo

#### React FC and {...props}

By default, I make every component use FC (from react, for typescript support), and pass {...props} as props to the component, so every component can be extended with props. If a component should not be given any customisation (eg: ContextProvider...), I would skip this technique, but most UI components find a use for FC and props.

#### Absolute paths

Again a personal preference, but absolute paths enforces a clean folder and module structure, and ties really well with my previes setup (no export defaults, index files).
Eg: a global Header component that should be found from anywhere should be imported: import {Header} from 'components'
Eg: But a very specific component like CartItem better not use absolute paths, and doesn't have to follow good project structure, as it will likely be imported in a component close to it (import {CartItem} from './components': in the Cart page for example)

## 2: Improve the pro listing page display

On each pro card, add atleast:

- payment methods accepted (paymentMethods: [PaymentMethodsEnum!])
- how many vets there are in the practice (employee_numbers: Float)
- number of assistants (numberOfASV: Float)
- display an image for each professional (pictures: [PictureWrapperComponent!])
## 3: Implement an add new professional page

New page to create new pros (frontend only)

- new route
- header nav

Following fields:

- name (text input)
- description (text area)
- image (file dropdown/picker, only accept mime type image/\*)

When submitted:

- show fake loading
- after show success
- after redirect to listing page
## 4: Implement the ProDetail page

Choose any fields to show a nice overview of the detail page

My choices:

- title
- large image
- employees
  - assitant amount
  - works amount
- services
  - title fr
  -
- visit information:
  - spoken langs
  - accepted payment methods
- contact information:
  - phone
  - mobile phone
  - email
  - website
  - address
    - city
    - zip
    - street
    - number
  - map (localisation.coordinates for map)
