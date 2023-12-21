# Common Components

This folder is the home for components which can be reused around various places in the app

# Layouts

This folder contains layout information. In this example I have provided a `<RootLayout />` component which wraps the whole app. We could go deeper with this and add layouts for different pages. In this case we would add a `Home` folder and a `HomeLayout` component for example.

# Pages

The pages folder is which maps out our routes to different components. This way we can follow a "page" layout where each folder inside `Pages` is a route in our application.
The example provided shows `Home`, `Users` and `Contact` folders. These all represent different URLs in our application.

## Page folder layout

Folders inside the `Page` folder should follow a specific structure. They should contain:

### Components Folder

This folder contains components which are specific to the page in which they are being used.

### Index file

This file is the overarching "page" of the route.

## Optional folders

Some folders which could be contained inside the `Page` folder structure include:

### Images

Images which are specific to said component. This should be in a `kebab-case.extension` kebab case format.

### Styles

Stylesheets specific to components inside the working folder would be housed here. These files should be named in a `CamelCase.extension` format.
