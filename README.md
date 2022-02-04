# React Framework Benchmark

> This is still WORK IN PROGRESS

# Intro

First of all, I'm very biased since I'm actively working on one of these, snowstorm, so definitly take all of my results with a grain of salt.

# Observations

## Next.JS

- Global CSS cannot be imported from files other than your Custom <App>.
- Errors out when using `"type": "module",` in your package.json
- Invalid CustomApp did not throw errors
- Image component doesn't work with static exports, can't import svgs
- SVGs need to be served from a "public" dir
- Font-Loading was clunky
- A lot of unhelpful warnings are logged to the console (e.g about 100 `postcss-preset-env: Replace fill-available to stretch, because spec had been changed`)
- It's a bit weird to select the root with `#__next`
- Links need to be wrapped in a <a> which is clunky for use with buttons
