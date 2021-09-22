declare function _exports(context: MfsContext): (from: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], to: string, opts?: any) => Promise<void>;
export = _exports;
export type DAGNode = import('@ipld/dag-pb').PBNode;
export type CID = import('multiformats/cid').CID;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type Mtime = import('ipfs-unixfs').Mtime;
export type MfsPath = import('./utils/to-mfs-path').MfsPath;
export type MfsTrail = import('./utils/to-trail').MfsTrail;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    flush: boolean;
    hashAlg: string;
    cidVersion: CIDVersion;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=cp.d.ts.map