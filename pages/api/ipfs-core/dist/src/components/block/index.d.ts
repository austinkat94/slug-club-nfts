export = BlockAPI;
/**
 * @typedef {import('../../types').Preload} Preload
 */
declare class BlockAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-core-utils/src/multihashes')} config.hashers
     * @param {import('ipfs-core-utils/src/multicodecs')} config.codecs
     * @param {Preload} config.preload
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     */
    constructor({ codecs, hashers, preload, repo }: {
        hashers: import('ipfs-core-utils/src/multihashes');
        codecs: import('ipfs-core-utils/src/multicodecs');
        preload: Preload;
        repo: import('ipfs-repo').IPFSRepo;
    });
    get: (cid: import("multiformats").CID, options?: any) => Promise<Uint8Array>;
    put: (block: Uint8Array, options?: any) => Promise<import("multiformats").CID>;
    rm: (cids: import("multiformats").CID | import("multiformats").CID[], options?: any) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>;
    stat: (cid: import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/block").StatResult>;
}
declare namespace BlockAPI {
    export { Preload };
}
type Preload = import('../../types').Preload;
//# sourceMappingURL=index.d.ts.map