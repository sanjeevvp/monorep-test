# Monorepo-test

This is a test repository experimenting with monorepos and lerna to manage dependencies

Lerna [https://lerna.js.org/]

Lerna is a really cool tool used to manage dependencies between microservices.

---
### Useful commands

Add package A as a dependency to package B:
```
lerna add package-A --scope=package-B
```

Separately, you could also add one external dependency to a specific package:
```
lerna add external dependency --scope=package-name
```


The third option is adding a dependency to all packages by including it into your package.json file in the root folder.
```
lerna add package-name
```

This publishes new versions to github package registry. These packages are reused within the other internal packages
```
lerna publish
```

This updates all internal dependencies to the latest published version
```
lerna bootstrap
```

