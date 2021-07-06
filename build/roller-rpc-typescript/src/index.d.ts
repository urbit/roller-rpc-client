import { PostMessageWindowTransport, PostMessageIframeTransport, WebSocketTransport, HTTPTransport, Client, JSONRPCError } from "@open-rpc/client-js";
import { OpenrpcDocument as OpenRPC } from "@open-rpc/meta-schema";
/**
 *
 * patp-encoded string with leading ~
 *
 * @default ~wanzod
 *
 */
export declare type Patp = string;
/**
 *
 * number representing a patp
 *
 */
export declare type Number = number;
/**
 *
 * An Azimuth Ship
 *
 */
export declare type Ship = Patp | Number;
export declare type OwnershipAddress = string;
export declare type SpawnProxy = string;
export declare type VotingProxy = string;
export declare type ManagementProxy = string;
export declare type TransferProxy = string;
export declare type Proxy = OwnershipAddress | SpawnProxy | VotingProxy | ManagementProxy | TransferProxy;
/**
 *
 * hex encoded address
 *
 */
export declare type EthAddress = string;
export declare type Reset = boolean;
export declare type StringDoaGddGA = string;
export declare type Breach = boolean;
/**
 *
 * One of: l1, l2, spawn
 *
 */
export declare type Dominion = string;
export declare type Nonce = number;
export interface Address {
    address?: EthAddress;
    nonce?: Nonce;
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
export declare type Life = number;
export declare type Pass = string;
export declare type Rift = number;
export declare type Forced = boolean;
export interface Sponsor {
    has?: Forced;
    who?: StringDoaGddGA;
    [k: string]: any;
}
export interface Ownership {
    life: Life;
    pass: Pass;
    rift: Rift;
    sponsor: Sponsor;
    escape?: StringDoaGddGA;
    [k: string]: any;
}
export interface Point {
    dominion?: Dominion;
    networking?: Networking;
    ownership?: Ownership;
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
export interface From {
    ship: Ship;
    proxy: Proxy;
    [k: string]: any;
}
/**
 *
 * Hex-encoded serialized L2 transaction
 *
 */
export declare type Raw = string;
export interface ConfigureKeysParams {
    encrypt: StringDoaGddGA;
    auth: StringDoaGddGA;
    cryptoSuite: StringDoaGddGA;
    breach: Breach;
    [k: string]: any;
}
export interface SpawnParams {
    address: EthAddress;
    ship: Ship;
    [k: string]: any;
}
export interface SponsorshipParams {
    ship: Ship;
    [k: string]: any;
}
export interface AddressParams {
    address: EthAddress;
    [k: string]: any;
}
export declare type L2TransactionCommonParams = ConfigureKeysParams | SpawnParams | ConfigureKeysParams | SponsorshipParams | AddressParams;
/**
 *
 * Raw L2 transaction as defined in /lib/naive.hoon
 *
 */
export interface L2Transaction {
    sig: Signature;
    from: From;
    raw: Raw;
    tx: L2TransactionCommonParams;
    [k: string]: any;
}
/**
 *
 * Pending transaction in the Roller, waiting to be submitted to Ethereum
 *
 */
export interface PendingTransaction {
    forced: Forced;
    tx: L2Transaction;
    address: EthAddress;
    [k: string]: any;
}
/**
 *
 * Ship encoded as a patp without leading sig
 *
 */
export declare type ShipName = string;
export interface SpawnedPoint {
    address?: EthAddress;
    ship?: ShipName;
    [k: string]: any;
}
/**
 *
 * One of: confirmed, pending, sending, confirmed, failed, unknown
 *
 */
export declare type TransactionStatus = string;
/**
 *
 * One of transfer-point, spawn, configure-keys, escape, cancel-escape, adopt, reject, detach, set-management-proxy, set-spawn-proxy, set-transfer-proxy
 *
 */
export declare type L2TransactionType = string;
export declare type Hash32 = string;
export interface TransactionHistoryData {
    status?: TransactionStatus;
    type?: L2TransactionType;
    hash?: Hash32;
    [k: string]: any;
}
/**
 *
 * Timestamp of when the next roll of L2 txs will be sent out
 *
 */
export declare type NextBatch = number;
/**
 *
 * How often the Roller sends out a new batch
 *
 */
export declare type Frequency = number;
/**
 *
 * How ofthen the Roller updates its state
 *
 */
export declare type RefreshTime = number;
/**
 *
 * For more info: https://chainid.network/
 *
 */
export declare type ChainId = number;
export declare type DNS = string;
export interface TransferPointParams {
    address: EthAddress;
    reset?: Reset;
    [k: string]: any;
}
export declare type Points = Point[];
/**
 *
 * Always returns "ok"
 *
 */
export declare type Success = string;
export declare type ListOfPendingTxs = PendingTransaction[];
export declare type SpawnedPoints = SpawnedPoint[];
export declare type AddressHistory = TransactionHistoryData[];
/**
 *
 * A Roller Config
 *
 */
export interface Config {
    nextBatch: NextBatch;
    frequency: Frequency;
    refreshTime: RefreshTime;
    chainId: ChainId;
    contract: EthAddress;
    [k: string]: any;
}
/**
 *
 * A list of DNS
 *
 */
export declare type ListOfDNS = DNS[];
/**
 *
 * Generated! Represents an alias to any of the provided schemas
 *
 */
export declare type AnyOfShipEthAddressSignatureFromTransferPointParamsRawSignatureFromSpawnParamsRawSignatureFromConfigureKeysParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromSponsorshipParamsRawSignatureFromAddressParamsRawSignatureFromAddressParamsRawSignatureFromAddressParamsRawShipEthAddressShipHash32EthAddressPointPointsSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessSuccessListOfPendingTxsListOfPendingTxsListOfPendingTxsSpawnedPointsNextBatchTransactionStatusAddressHistoryNonceSuccessConfigListOfDNS = Ship | EthAddress | Signature | From | TransferPointParams | Raw | SpawnParams | ConfigureKeysParams | SponsorshipParams | AddressParams | Hash32 | Point | Points | Success | ListOfPendingTxs | SpawnedPoints | NextBatch | TransactionStatus | AddressHistory | Nonce | Config | ListOfDNS;
export declare type GetPoint = (ship: Ship) => Promise<Point>;
export declare type GetPoints = (address: EthAddress) => Promise<Points>;
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
export declare type GetAllPending = () => Promise<ListOfPendingTxs>;
export declare type GetPendingByShip = (ship: Ship) => Promise<ListOfPendingTxs>;
export declare type GetPendingByAddress = (address: EthAddress) => Promise<ListOfPendingTxs>;
export declare type GetSpawned = (ship: Ship) => Promise<SpawnedPoints>;
export declare type WhenNextBatch = () => Promise<NextBatch>;
export declare type GetTransactionStatus = (hash: Hash32) => Promise<TransactionStatus>;
export declare type GetHistory = (address: EthAddress) => Promise<AddressHistory>;
export declare type GetNonce = () => Promise<Nonce>;
export declare type CancelTransaction = () => Promise<Success>;
export declare type GetRollerConfig = () => Promise<Config>;
export declare type GetDns = () => Promise<ListOfDNS>;
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
