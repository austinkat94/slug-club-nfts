export = OfflineDatastore;
declare class OfflineDatastore {
    /**
     * @param {import('ipfs-repo').IPFSRepo} repo
     */
    constructor(repo: import('ipfs-repo').IPFSRepo);
    _repo: import("ipfs-repo/dist/src/types").IPFSRepo;
    /** @type {any[]} */
    stores: any[];
    /**
     * Put a value to the local datastore indexed by the received key properly encoded.
     *
     * @param {Uint8Array} key - identifier of the value.
     * @param {Uint8Array} value - value to be stored.
     */
    put(key: Uint8Array, value: Uint8Array): Promise<void>;
    /**
     * Get a value from the local datastore indexed by the received key properly encoded.
     *
     * @param {Uint8Array} key - identifier of the value to be obtained.
     */
    get(key: Uint8Array): Promise<Uint8Array>;
    /**
     * encode key properly - base32(/ipns/{cid})
     *
     * @param {Uint8Array} key
     */
    _routingKey(key: Uint8Array): Key;
}
import { Key } from "interface-datastore";
//# sourceMappingURL=offline-datastore.d.ts.map