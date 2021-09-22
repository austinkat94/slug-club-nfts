export = updateMfsRoot;
/**
 * @typedef {import('../').MfsContext} MfsContext
 */
/**
 * @param {MfsContext} context
 * @param {import('multiformats/cid').CID} cid
 * @param {import('ipfs-core-types/src/utils').AbortOptions} options
 */
declare function updateMfsRoot(context: MfsContext, cid: import('multiformats/cid').CID, options: import('ipfs-core-types/src/utils').AbortOptions): Promise<import("multiformats/cid").CID>;
declare namespace updateMfsRoot {
    export { MfsContext };
}
type MfsContext = import('../').MfsContext;
//# sourceMappingURL=update-mfs-root.d.ts.map