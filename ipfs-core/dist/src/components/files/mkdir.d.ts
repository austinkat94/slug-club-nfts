declare function _exports(context: MfsContext): (path: string, options?: any) => Promise<void>;
export = _exports;
export type PBNode = import('@ipld/dag-pb').PBNode;
export type CID = import('multiformats/cid').CID;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type MtimeLike = import('ipfs-unixfs').MtimeLike;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    hashAlg: string;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    flush: boolean;
    mode?: number | undefined;
    mtime?: import("ipfs-unixfs/types/src/types").MtimeLike | undefined;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=mkdir.d.ts.map