import { PostMessageWindowTransport, PostMessageIframeTransport, WebSocketTransport, HTTPTransport, Client, JSONRPCError } from "@open-rpc/client-js";
import { OpenrpcDocument as OpenRPC } from "@open-rpc/meta-schema";
/**
 *
 * patp-encoded string with leading ~
 *
 * @default ~wanzod
 *
 */
export declare type StringSO6Vix9L = string;
/**
 *
 * number representing a patp
 *
 */
export declare type NumberLaZOkHf0 = number;
/**
 *
 * An Azimuth Ship
 *
 */
export declare type Ship = StringSO6Vix9L | NumberLaZOkHf0;
export declare type StringKCOxu4IZ = string;
export declare type StringS75VXjTd = string;
export declare type StringBtmqfZ2A = string;
export declare type StringPaE3Lhtm = string;
export declare type StringVyC95Vbk = string;
export declare type AnyOfStringBtmqfZ2AStringKCOxu4IZStringS75VXjTdStringPaE3LhtmStringVyC95VbkQz2LjYxn = StringKCOxu4IZ | StringS75VXjTd | StringBtmqfZ2A | StringPaE3Lhtm | StringVyC95Vbk;
/**
 *
 * hex encoded address
 *
 */
export declare type EthAddress = string;
export declare type BooleanVyG3AETh = boolean;
export declare type StringDoaGddGA = string;
export declare type Dominion = string;
export declare type Integer2AHOqbcQ = number;
export interface Address {
    address?: StringDoaGddGA;
    nonce?: Integer2AHOqbcQ;
    [k: string]: any;
}
export interface Networking {
    owner?: Address;
    spawnProxy?: Address;
    managementProxy?: Address;
    votingProxy?: Address;
    transferProxy?: Address;
    [k: string]: any;
}
export declare type NumberHo1ClIqD = number;
export interface Sponsor {
    has?: BooleanVyG3AETh;
    who?: StringDoaGddGA;
    [k: string]: any;
}
export interface Ownership {
    life: NumberHo1ClIqD;
    pass: StringDoaGddGA;
    rift: NumberHo1ClIqD;
    sponsor: Sponsor;
    escape?: StringDoaGddGA;
    [k: string]: any;
}
export interface ObjectOfOwnershipNetworkingDominionEL7Nlv0E {
    dominion?: Dominion;
    networking?: Networking;
    ownership?: Ownership;
    [k: string]: any;
}
export interface Point {
    result?: ObjectOfOwnershipNetworkingDominionEL7Nlv0E;
    [k: string]: any;
}
/**
 *
 * Hex-encoded signature
 *
 */
export declare type Signature = string;
/**
 *
 * Ship that sends the transaction and type of Ethereum address that controls it
 *
 */
export declare type From = any;
/**
 *
 * Hex-encoded serialized L2 transaction
 *
 */
export declare type Raw = string;
export declare type ConfigureKeysParams = any;
export declare type SpawnParams = any;
export declare type SponsorshipParams = any;
export declare type AddressParams = any;
export declare type AnyOfAddressParamsConfigureKeysParamsConfigureKeysParamsSpawnParamsSponsorshipParamsP1SJt8Be = ConfigureKeysParams | SpawnParams | ConfigureKeysParams | SponsorshipParams | AddressParams;
/**
 *
 * Raw L2 transaction as defined in /lib/naive.hoon
 *
 */
export declare type L2Transaction = any;
/**
 *
 * Pending transaction in the Roller, waiting to be submitted to Ethereum
 *
 */
export declare type PendingTransaction = any;
/**
 *
 * Ship encoded as a patp without leading sig
 *
 */
export declare type StringQ2LpWR4D = string;
export interface ObjectOfStringQ2LpWR4DEthAddressPmxtSL30 {
    address?: EthAddress;
    ship?: StringQ2LpWR4D;
    [k: string]: any;
}
export declare type Hash32 = string;
export interface ObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJa {
    status?: StringDoaGddGA;
    type?: StringDoaGddGA;
    hash?: Hash32;
    [k: string]: any;
}
/**
 *
 * Timestamp of when the next roll of L2 txs will be sent out
 *
 */
export declare type NumberWriI2SbH = number;
/**
 *
 * How often the Roller sends out a new batch
 *
 */
export declare type NumberBSbYpL6B = number;
/**
 *
 * How ofthen the Roller updates its state
 *
 */
export declare type NumberXP3B1TUw = number;
/**
 *
 * For more info: https://chainid.network/
 *
 */
export declare type Number95JxjbpK = number;
export declare type TransferPointParams = any;
export declare type UnorderedSetOfPointzbqqhMBG = Point[];
/**
 *
 * Always returns "ok"
 *
 */
export declare type Success = string;
export declare type UnorderedSetOfPendingTransaction7Pj9MHiM = PendingTransaction[];
export declare type UnorderedSetOfObjectOfStringQ2LpWR4DEthAddressPmxtSL30UsTGkhi5 = ObjectOfStringQ2LpWR4DEthAddressPmxtSL30[];
export declare type UnorderedSetOfObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJaDh6PS6Ux = ObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJa[];
/**
 *
 * A Roller Config
 *
 */
export interface Config {
    nextBatch?: NumberWriI2SbH;
    frequency?: NumberBSbYpL6B;
    refreshTime?: NumberXP3B1TUw;
    chainId?: Number95JxjbpK;
    contract?: EthAddress;
    [k: string]: any;
}
/**
 *
 * A list of DNS
 *
 */
export declare type UnorderedSetOfStringDoaGddGAekWQEsT4 = StringDoaGddGA[];
/**
 *
 * Generated! Represents an alias to any of the provided schemas
 *
 */
export declare type AnyOfShipEthAddressSignatureFromTransferPointParamsRawSignatureFromSpawnParamsRawSignatureFromConfigureKeysParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromAddressParamsRawSignatureFromAddressParamsRawSignatureFromAddressParamsRawShipEthAddressShipHash32EthAddressPointUnorderedSetOfPointzbqqhMBGSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessUnorderedSetOfPendingTransaction7Pj9MHiMUnorderedSetOfPendingTransaction7Pj9MHiMUnorderedSetOfPendingTransaction7Pj9MHiMUnorderedSetOfObjectOfStringQ2LpWR4DEthAddressPmxtSL30UsTGkhi5NumberHo1ClIqDStringDoaGddGAUnorderedSetOfObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJaDh6PS6UxNumberHo1ClIqDSuccessConfigUnorderedSetOfStringDoaGddGAekWQEsT4 = Ship | EthAddress | Signature | From | TransferPointParams | Raw | SpawnParams | ConfigureKeysParams | SponsorshipParams | AddressParams | Hash32 | Point | UnorderedSetOfPointzbqqhMBG | Success | UnorderedSetOfPendingTransaction7Pj9MHiM | UnorderedSetOfObjectOfStringQ2LpWR4DEthAddressPmxtSL30UsTGkhi5 | NumberHo1ClIqD | StringDoaGddGA | UnorderedSetOfObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJaDh6PS6Ux | Config | UnorderedSetOfStringDoaGddGAekWQEsT4;
export declare type GetPoint = (ship: Ship) => Promise<Point>;
export declare type GetPoints = (address: EthAddress) => Promise<UnorderedSetOfPointzbqqhMBG>;
export declare type TransferPoints = (sig: Signature, from: From, data: TransferPointParams, raw: Raw) => Promise<Success>;
export declare type Spawn = (sig: Signature, from: From, data: SpawnParams, raw: Raw) => Promise<Success>;
export declare type ConfigureKeys = (sig: Signature, from: From, data: ConfigureKeysParams, raw: Raw) => Promise<Success>;
export declare type Escape = (sig: Signature, from: From, data: SponsorshipParams, raw: Raw) => Promise<Success>;
export declare type CancelEscape = (sig: Signature, from: From, data: SponsorshipParams, raw: Raw) => Promise<Success>;
export declare type Adopt = (sig: Signature, from: From, data: SponsorshipParams, raw: Raw) => Promise<Success>;
export declare type Detach = (sig: Signature, from: From, data: SponsorshipParams, raw: Raw) => Promise<Success>;
export declare type Reject = (sig: Signature, from: From, data: SponsorshipParams, raw: Raw) => Promise<Success>;
export declare type SetManagementProxy = (sig: Signature, from: From, data: AddressParams, raw: Raw) => Promise<Success>;
export declare type SetSpawnProxy = (sig: Signature, from: From, data: AddressParams, raw: Raw) => Promise<Success>;
export declare type SetTransferProxy = (sig: Signature, from: From, data: AddressParams, raw: Raw) => Promise<Success>;
export declare type GetAllPending = () => Promise<UnorderedSetOfPendingTransaction7Pj9MHiM>;
export declare type GetPendingByShip = (ship: Ship) => Promise<UnorderedSetOfPendingTransaction7Pj9MHiM>;
export declare type GetPendingByAddress = (address: EthAddress) => Promise<UnorderedSetOfPendingTransaction7Pj9MHiM>;
export declare type GetSpawned = (ship: Ship) => Promise<UnorderedSetOfObjectOfStringQ2LpWR4DEthAddressPmxtSL30UsTGkhi5>;
export declare type WhenNextBatch = () => Promise<NumberHo1ClIqD>;
export declare type GetTransactionStatus = (hash: Hash32) => Promise<StringDoaGddGA>;
export declare type GetHistory = (address: EthAddress) => Promise<UnorderedSetOfObjectOfStringDoaGddGAStringDoaGddGAHash32NIKj3XJaDh6PS6Ux>;
export declare type GetNonce = () => Promise<NumberHo1ClIqD>;
export declare type CancelTransaction = () => Promise<Success>;
export declare type GetRollerConfig = () => Promise<Config>;
export declare type GetDns = () => Promise<UnorderedSetOfStringDoaGddGAekWQEsT4>;
export interface Options {
    transport: {
        type: "websocket" | "http" | "https" | "postmessagewindow" | "postmessageiframe";
        host: string;
        port: number;
        path?: string;
        protocol?: string;
    };
}
export declare class RollerRPCAPI {
    rpc: Client;
    static openrpcDocument: OpenRPC;
    transport: HTTPTransport | WebSocketTransport | PostMessageWindowTransport | PostMessageIframeTransport;
    private validator;
    private timeout;
    constructor(options: Options);
    /**
     * Adds a JSONRPC notification handler to handle receiving notifications.
     * @example
     * myClient.onNotification((data)=>console.log(data));
     */
    onNotification(callback: (data: any) => void): void;
    /**
     * Adds an optional JSONRPCError handler to handle receiving errors that cannot be resolved to a specific request
     * @example
     * myClient.onError((err: JSONRPCError)=>console.log(err.message));
     */
    onError(callback: (data: JSONRPCError) => void): void;
    /**
     * Sets a default timeout in ms for all requests excluding notifications.
     * @example
     * // 20s timeout
     * myClient.setDefaultTimeout(20000);
     * // Removes timeout from request
     * myClient.setDefaultTimeout(undefined);
     */
    setDefaultTimeout(ms?: number): void;
    /**
     * Initiates [[RollerRPCAPI.startBatch]] in order to build a batch call.
     *
     * Subsequent calls to [[RollerRPCAPI.request]] will be added to the batch.
     * Once [[RollerRPCAPI.stopBatch]] is called, the promises for the [[RollerRPCAPI.request]]
     * will then be resolved.  If there is already a batch in progress this method is a noop.
     *
     * @example
     * myClient.startBatch();
     * myClient.foo().then(() => console.log("foobar"))
     * myClient.bar().then(() => console.log("foobarbaz"))
     * myClient.stopBatch();
     */
    startBatch(): void;
    /**
     * Initiates [[Client.stopBatch]] in order to finalize and send the batch to the underlying transport.
     *
     * stopBatch will send the [[RollerRPCAPI]] calls made since the last [[RollerRPCAPI.startBatch]] call. For
     * that reason, [[RollerRPCAPI.startBatch]] MUST be called before [[RollerRPCAPI.stopBatch]].
     *
     * @example
     * myClient.startBatch();
     * myClient.foo().then(() => console.log("foobar"))
     * myClient.bar().then(() => console.log("foobarbaz"))
     * myClient.stopBatch();
     */
    stopBatch(): void;
    private request;
    /**
     * Retrieves Azimuth Point data for a specific ship
     */
    getPoint: GetPoint;
    /**
     * Returns all the Azimuth points controlled by an ethereum address
     */
    getPoints: GetPoints;
    /**
     * Transfers a point to an ethereum address
     */
    transferPoints: TransferPoints;
    /**
     * Spawns a ship to an Ethereum Address
     */
    spawn: Spawn;
    /**
     * Configure Keys
     */
    configureKeys: ConfigureKeys;
    /**
     * Request escaping to a different sponsor
     */
    escape: Escape;
    /**
     * Cancel request to escape
     */
    cancelEscape: CancelEscape;
    /**
     * Adopt ship
     */
    adopt: Adopt;
    /**
     * Detach ship
     */
    detach: Detach;
    /**
     * Reject ship
     */
    reject: Reject;
    /**
     * Set Management Proxy
     */
    setManagementProxy: SetManagementProxy;
    /**
     * Set Spawn Proxy
     */
    setSpawnProxy: SetSpawnProxy;
    /**
     * Set Transfer Proxy
     */
    setTransferProxy: SetTransferProxy;
    /**
     * Gets all pending transactions in the roller
     */
    getAllPending: GetAllPending;
    /**
     * Gets all pending transactions in the roller, by ship
     */
    getPendingByShip: GetPendingByShip;
    /**
     * Gets all pending transactions in the roller, by address
     */
    getPendingByAddress: GetPendingByAddress;
    /**
     * Gets all spawned points by a star or galaxy
     */
    getSpawned: GetSpawned;
    /**
     * Timestamp of when the next L2 batch will be submitted
     */
    whenNextBatch: WhenNextBatch;
    /**
     * Status of an L2 transaction submitted to the Roller
     */
    getTransactionStatus: GetTransactionStatus;
    /**
     * Returns status, hash and type of all L2 tx submitted by an ethereum address,
     */
    getHistory: GetHistory;
    /**
     * Current nonce used by the Roller
     */
    getNonce: GetNonce;
    /**
     * Cancels a transaction that hasn't been sent out
     */
    cancelTransaction: CancelTransaction;
    /**
     * Returns configuration parameters of the Roller
     */
    getRollerConfig: GetRollerConfig;
    /**
     * Naive Rollup DNSs
     */
    getDns: GetDns;
}
export default RollerRPCAPI;
