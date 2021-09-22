declare function _exports(context: MfsContext): (from: string | string[], to: string, options?: any) => Promise<void>;
export = _exports;
export type CIDVersion = import('multiformats/cid').CIDVersion;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    parents: boolean;
    flush: boolean;
    cidVersion: CIDVersion;
    hashAlg: string;
    shardSplitThreshold: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=mv.d.ts.map