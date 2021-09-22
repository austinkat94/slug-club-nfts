export = BootstrapAPI;
declare class BootstrapAPI {
    /**
     * @param {Object} config
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     */
    constructor({ repo }: {
        repo: import('ipfs-repo').IPFSRepo;
    });
    add: (multiaddr: import("multiaddr").Multiaddr, options?: any) => Promise<{
        Peers: import("multiaddr").Multiaddr[];
    }>;
    list: (options?: any) => Promise<{
        Peers: import("multiaddr").Multiaddr[];
    }>;
    rm: (multiaddr: import("multiaddr").Multiaddr, options?: any) => Promise<{
        Peers: import("multiaddr").Multiaddr[];
    }>;
    clear: (options?: any) => Promise<{
        Peers: import("multiaddr").Multiaddr[];
    }>;
    reset: (options?: any) => Promise<{
        Peers: import("multiaddr").Multiaddr[];
    }>;
}
//# sourceMappingURL=index.d.ts.map