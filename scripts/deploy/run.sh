#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache out
yarn build
npx next export
touch out/.nojekyll
node "$CURRENT_SCRIPT_PATH/cname.js"
npx gh-pages -b master -d out