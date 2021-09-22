declare function _exports(context: MfsContext): (path: string, content: string | Uint8Array | AsyncIterable<Uint8Array> | Iterable<Uint8Array> | Blob, opts?: any) => Promise<void>;
export = _exports;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type MtimeLike = import('ipfs-unixfs').MtimeLike;
export type MfsContext = import('./').MfsContext;
export type FilePath = import('./utils/to-mfs-path').FilePath;
export type MfsPath = import('./utils/to-mfs-path').MfsPath;
export type MultihashHasher = import('multiformats/hashes/interface').MultihashHasher;
export type DefaultOptions = {
    offset: number;
    length: number;
    create: boolean;
    truncate: boolean;
    rawLeaves: boolean;
    reduceSingleLeafToSelf: boolean;
    cidVersion: CIDVersion;
    hashAlg: string;
    parents: boolean;
    progress: import('ipfs-core-types/src/root').AddProgressFn;
    strategy: 'trickle' | 'balanced';
    flush: boolean;
    leafType: 'raw' | 'file';
    shardSplitThreshold: number;
    mtime?: import("ipfs-unixfs/types/src/types").MtimeLike | undefined;
    mode?: number | undefined;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=write.d.ts.map