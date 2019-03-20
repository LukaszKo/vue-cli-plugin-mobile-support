# Vue Cli Plugin - Mobile Support
This plugin gives you the ability to manage the responsiveness of your application with Vue JS Mixin.
This mixin includes a few computed properties based on breakpoints configuration.
You can use them directly in the template or javascript code.

## Getting started

### Demo https://jsfiddle.net/zLe2gkpx/

### Instalation via Vue CLI 3 ui interface
1.  Run UI interface.
```
vue ui
```

2. Then go to Plugins.

![alt text](https://firebasestorage.googleapis.com/v0/b/pwa-app-26ca8.appspot.com/o/github%2Fplugins.png?alt=media&token=5053a560-45e1-4d43-aea9-d8ab6d1d9701)

3. Click 'Add plugin' button.

![alt text](https://firebasestorage.googleapis.com/v0/b/pwa-app-26ca8.appspot.com/o/github%2Fadd_button.png?alt=media&token=6a016472-f66e-4a06-9133-6e09abed5138)

4. Type e.g 'mobile-support' in the search input.

![alt text](https://firebasestorage.googleapis.com/v0/b/pwa-app-26ca8.appspot.com/o/github%2Fsearch.png?alt=media&token=62e22b62-8c6a-4b02-99a9-977bb01a9c69)

4. Select and click install.
5. Then you have to choose one of the breakpoints types.

![alt text](https://firebasestorage.googleapis.com/v0/b/pwa-app-26ca8.appspot.com/o/github%2Fselect.png?alt=media&token=0c9d3bfd-74cc-43ac-8ecb-d4bfa7248391)

6. Select and click 'Finish instalation'.
7. Then you can go to 'Configuration' and you can play with values of breakpoints values.

![alt text](https://firebasestorage.googleapis.com/v0/b/pwa-app-26ca8.appspot.com/o/github%2Fconfig.png?alt=media&token=8d43d28e-bdd2-4930-b8ad-b8af66ee124d)

### Or instalation via terminal
```
vue add vue-cli-plugin-mobile-support
```

## Usage

Plugin will add a few files to you project:
- WindowResize.js (Mixin)
- breakpointsConfig.js (breakpoints configuration file)
- TestComponent.vue (Example of using above mixin)

Mixin give you a few defined computed properties based on different breakpoints values like: **xs, sm, md, lg and xl.**
All of them returning **boolean** so that e.g you can easly use them to control showing/hidding some elements in the templates on differents
screen sizes or do run some logic inside javascript code.

**I Recommend you to use TestComponent (somewhere in the app) and just play with it to get known of how its works.**

### Have fun!

