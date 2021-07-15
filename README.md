# Build

```bash
rm -rf docs
open-rpc-generator generate -c open-rpc-generator-config.json
cd roller-rpc-client/client/typescript
npm run build
mv docs ../../../.
```
