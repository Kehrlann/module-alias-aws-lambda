#!/usr/bin/env bash

npm install
zip -r lambda.zip index.js package.json node_modules src
