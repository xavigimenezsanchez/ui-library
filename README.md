# Error in storybook

https://github.com/storybookjs/storybook/issues/17751
https://github.com/storybookjs/storybook/issues/18226

Hoping this might temporarily fix things for people or point someone in the right direction: by editing the validate-configuration-files.js file (node_modules/@storybook/core-common/dist/cjs/utils/validate-configuration-files.js, 6.5.0-beta.8), simply adding the following line in the exists method at line 44 will solve the issue (note: only local node modules, it's a bandaid, NOT a solution, and make sure a main.js exists):

```
if (file === "main") return true;

// (or better, actually fix the path resolving temporary)

return !!_glob.default.sync(_path.default.resolve(configDir, `${file}${extensionsPattern}`).split(_path.default.sep).join("/")).length;
```
