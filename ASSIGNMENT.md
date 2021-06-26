# 1: Refactoring

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

# 3: Implement an add new professional page

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
