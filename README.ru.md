# ☢ custom-react-scripts ☢
Latest version of original react-scripts: **1.0.11**

## Установка

```bash
cd packages/react-dev-utils/
npm publish
cd ../react-error-overlay/
npm publish
cd ../react-scripts/
npm publish
```

### 💡Features:
* Decorators
* babel-preset-stage-0
* Less
* Sass
* CSS modules
* Sass modules
* Less modules
* Stylus modules

**the features are optional and can be turned on/off individually*

### Установка

```bash
npm install -g create-react-app
create-react-app my-app --scripts-version es6-react-scripts

npm install -g create-react-app@next
create-react-app my-app --scripts-version es6-react-scripts
```

### Обновление

```bash
yarn upgrade es6-react-scripts
```


Modify the ```.env``` file in the root of the generated project, and add any of the configuration options below 👇 to enable that feature.

The generated project comes with every option turned on by default, but you can remove them at any time by removing the options from the ```.env``` file.

### 📝 Configuration options

#### Styling
- ```REACT_APP_SASS=true``` - enable SASS support
- ```REACT_APP_LESS=true``` - enable LESS support
- ```REACT_APP_STYLUS=true``` - enable Stylus support
- ```REACT_APP_CSS_MODULES=true``` - enable CSS modules
- ```REACT_APP_SASS_MODULES=true``` - enable Sass modules
- ```REACT_APP_LESS_MODULES=true``` - enable Less modules
- ```REACT_APP_STYLUS_MODULES=true``` - enable Stylus modules

Note: to use modules the file must be named in the following format: ```$name.module.$preprocessorName```.

For example ```styles.module.css``` or ```header.module.sass``` or ```footer.module.less```, etc. Files that are not prefixed with module will be parsed normally.

#### Babel
- ```REACT_APP_BABEL_STAGE_0=true``` - enable stage-0 Babel preset
- ```REACT_APP_DECORATORS=true``` - enable decorators support

#### Other
- ```REACT_APP_WEBPACK_DASHBOARD=true``` - Enables connection to the [webpack-dashboard](https://github.com/FormidableLabs/electron-webpack-dashboard) Electron app (the app must be installed on local machine)

### 🤔 Why?
The ```create-react-app``` app doesn't allow user configuration and modifications for few reasons:

* Some of the babel presets and plugins that people might use are experimental.  If they're used in a project and then they don't make it in the ES spec, they will break backwards compatibility.
* It's hard to maintain code for all of these custom configurations that people want to use.

But people still want to use some of these features, and they're either ejecting their CRA app, or just don't use ```create-react-app``` because they're *just* missing **X** feature.

So instead of [searching npm](https://www.npmjs.com/search?q=react-scripts) for a ```react-scripts``` fork with the **X** feature you need, this fork provides support for all of these extra features with simply adding a line in the ```.env``` config.

### How does it work?
The CRA team recently [added support](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) for an ```.env``` file in the root of the generated CRA project.

From the original readme:
> To define permanent environment vairables, create a file called .env in the root of your project:
> ```REACT_APP_SECRET_CODE=abcdef```

I just added support for extra environment variables that actually turn on certain plugins, babel plugins, presets, and loaders in the webpack and babel configs of ```react-scripts```.

### Future plans

I will put all of my efforts into supporting this fork to be always on par with features with the newest ```create-react-app``` and ```react-scripts``` versions.
