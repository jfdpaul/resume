# configuration in package.json
```
  "devDependencies": {
      ...
    "gh-pages": "^2.2.0",
    ...
  },
  "scripts": {
    ...
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
```

# How to run
- run `gh-pages deploy`