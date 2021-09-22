export = ObjectPatchAPI;
/**
 * @typedef {import('../../../types').Preload} Preload
 */
declare class ObjectPatchAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     * @param {Preload} config.preload
     */
    constructor({ repo, preload }: {
        repo: import('ipfs-repo').IPFSRepo;
        preload: Preload;
    });
    addLink: (cid: import("multiformats").CID, link: import("@ipld/dag-pb/src/interface").PBLink, options?: any) => Promise<import("multiformats").CID>;
    appendData: (cid: import("multiformats").CID, data: Uint8Array, options?: any) => Promise<import("multiformats").CID>;
    rmLink: (multihash: import("multiformats").CID, linkRef: string | import("@ipld/dag-pb/src/interface").PBLink, options?: any) => Promise<import("multiformats").CID>;
    setData: (cid: import("multiformats").CID, data: Uint8Array, options?: any) => Promise<import("multiformats").CID>;
}
declare namespace ObjectPatchAPI {
    export { Preload };
}
type Preload = import('../../../types').Preload;
//# sourceMappingURL=index.d.ts.map