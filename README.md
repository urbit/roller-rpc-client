# Azimuth Roller Client

The tests expect an urbit on `localhost:8080` running `%aggregator` and `%aggregator-rpc` gall agents.

## Install

```bash
npm i
npm run build
```

## Generate client and docs

```bash
rm -rf docs
cd ./client/typescript
npm install && npm run build
mv docs ../../../.
git add . && git commit -m 'add new docs' && git push origin master
```

## Usage

See `./tests/roller.tests.ts` for examples of using the RPCs
