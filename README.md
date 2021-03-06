# π― Next - Chakra-ui π―

This template includes a basic next app including chakra ui with basic theme set up.

## πΆββοΈAbsolute routes
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

## πFolder structure 
-----------------

```
βββ components
β   βββ atoms
β   βββ molecules
β   βββ organisms
βββ pages
β   βββ api
β   βββ dashboard
βββ public
β   βββ assets
β   β   βββ imgs
β   β   βββ utils
βββ store
β   βββ index.js
βββ styles
βββ theme
    βββ theme.js
```

<br>

## π§° Components
-------
The components folder uses the atomic approach. Dividing components into three categories: **Atoms, Molecules and Organisms.** With atoms as the smallest and more specific components, to organisms being complex multi atoms and multi molecules components.

<br>

## π Theme
-------
Inside the theme.js file there are defined the dark and light theme