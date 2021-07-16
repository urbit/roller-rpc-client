import RollerRPCAPI, {
  Ship,
  Point,
  EthAddress,
  Hash,
} from "../out/client/typescript/src/index";

const api = new RollerRPCAPI({
  transport: {
    type: "http",
    host: "localhost",
    port: 8080,
    path: "/v1/roller",
  },
});

api.setDefaultTimeout(20000);

test("getRollerConfig", async () => {
  const config = await api.getRollerConfig();
  expect(config).toHaveProperty(
    "contract",
    "0x56db68f29203ff44a803faa2404a44ecbb7a7480"
  );
});

test("getPoint", async () => {
  const ship: Ship = "~norsyr-torryn";
  // using api.rpc.request skips the validation, but when using api.getPoint(ship)
  // the validation fails, but the parameter, ship, needs to be a string?
  // It probably can be fixed by tweaking spec.json, or not using "paramStructure": "by-name")
  // but removing "paramStructure": "by-name", the params are sent as an array, not as an object
  // which complicates the validation in azimuth-rpc...
  //
  const point: Point = await api.rpc.request({
    method: "getPoint",
    params: { ship },
  });
  expect(point).toHaveProperty("dominion", "l2");
});

// test("getPoint-validation", async () => {
//   const ship: Ship = "~norsyr-torryn";
//   const point = await api.getPoint(ship);
//   console.log(point);
//   expect(point).toHaveProperty("dominion", "l2");
// });

test("getPoints", async () => {
  const address: EthAddress = "0x6deffb0cafdb11d175f123f6891aa64f01c24f7d";
  console.log("getPoints-request");
  const points: Point[] = await api.rpc.request({
    method: "getPoints",
    params: { address },
  });
  expect(points).toHaveLength(10);
});

test("spawn", async () => {
  const hash: Hash = await api.rpc.request({
    method: "spawn",
    params: {
      sig: "0x1234", // We fake the signing in the backend
      from: {
        ship: "~wanzod",
        proxy: "own",
      },
      data: {
        address: "0xf48062Ae8BAfD6Ef19CD6cb89db93A0d0ca6ce2",
        ship: "~norsyr-torryn",
      },
    },
  });
  expect(typeof hash).toBe("string");
});
