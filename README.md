# 💯 Next - Chakra-ui 💯

This template includes a basic next app including chakra ui with basic theme set up.

## 🚶‍♂️Absolute routes
-----------------
Absolute routes are defined inside the jsconfig.json, default modules [atoms, molecules, organisms, imgs, utils, store]

### Usage
```js
import MyComponent from "@/molecules/MyComponent.jsx"
```

### Including extra modules
```json
// Inside config.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/atoms/*": ["components/atoms/*"],
      "@/molecules/*": ["components/molecules/*"],
      "@/organisms/*": ["components/organisms/*"],
      "@/imgs/*": ["public/assets/imgs/*"],
      "@/utils/*": ["public/assets/utils/*"],
      "@/store/*": ["store/*"],
      "@/my_new_module/*": ["module/folder/route*"]
    }
  }
}
```

</br>

## 📁Folder structure 
-----------------

```
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
├── pages
│   ├── api
│   └── dashboard
├── public
│   ├── assets
│   │   ├── imgs
│   │   └── utils
├── store
│   └── index.js
├── styles
└── theme
    └── theme.js
```

<br>

## 🧰 Components
-------
The components folder uses the atomic approach. Dividing components into three categories: **Atoms, Molecules and Organisms.** With atoms as the smallest and more specific components, to organisms being complex multi atoms and multi molecules components.

<br>

## 💅 Theme
-------
Inside the theme.js file there are defined the dark and light theme