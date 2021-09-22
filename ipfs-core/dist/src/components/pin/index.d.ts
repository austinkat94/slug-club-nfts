export = PinAPI;
declare class PinAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-core-utils/src/multicodecs')} config.codecs
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     */
    constructor({ codecs, repo }: {
        codecs: import('ipfs-core-utils/src/multicodecs');
        repo: import('ipfs-repo').IPFSRepo;
    });
    addAll: (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").AddInput>, options?: any) => AsyncIterable<import("multiformats").CID>;
    add: (path: string | import("multiformats").CID, options?: any) => Promise<import("multiformats").CID>;
    rmAll: (source: import("ipfs-core-types/src/utils").AwaitIterable<import("ipfs-core-types/src/pin").RmAllInput>, _options?: any) => AsyncIterable<import("multiformats").CID>;
    rm: (path: string | import("multiformats").CID, options?: any) => Promise<import("multiformats").CID>;
    ls: (options?: any) => AsyncIterable<import("ipfs-core-types/src/pin").LsResult>;
    /** @type {import('ipfs-core-types/src/pin/remote').API} */
    remote: import('ipfs-core-types/src/pin/remote').API;
}
//# sourceMappingURL=index.d.ts.map