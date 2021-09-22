declare function _exports({ repo, preload }: Context): (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<Uint8Array>;
export = _exports;
export type Context = {
    repo: import('ipfs-repo').IPFSRepo;
    preload: import('../types').Preload;
};
//# sourceMappingURL=get.d.ts.map