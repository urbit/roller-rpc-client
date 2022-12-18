# Azimuth Roller Client

## Generate Typescript client

```bash
npm i
npm run build
```

## Build Typescript client and docs

```bash
# update spec.json with the newest version
npm i && npm run build
rm -rf docs
cd ./client/typescript
npm i && npm run build
mv docs ../../.
cd ../..
# The client docs are hosted as a github page, so we need to push the updated version
git add . && git commit -m 'add new docs' && git push origin master
```

## Test

The tests expect an urbit on `localhost:8080` running `%aggregator` and `%aggregator-rpc` gall agents.

```bash
npm run test
```

`./tests/roller.tests.ts` shows some examples of using the RPCs
