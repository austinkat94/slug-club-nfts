export = NameAPI;
declare class NameAPI {
    /**
     * @param {Object} config
     * @param {import('../ipns')} config.ipns
     * @param {import('peer-id')} config.peerId
     * @param {import('../../types').Options} config.options
     * @param {import('ipfs-repo').IPFSRepo} config.repo
     * @param {import('ipfs-core-utils/src/multicodecs')} config.codecs
     * @param {import('ipfs-core-types/src/root').API["isOnline"]} config.isOnline
     * @param {import('libp2p/src/keychain')} config.keychain
     * @param {import('ipfs-core-types/src/root').API["dns"]} config.dns
     */
    constructor({ dns, ipns, repo, codecs, peerId, isOnline, keychain, options }: {
        ipns: import('../ipns');
        peerId: import('peer-id');
        options: import('../../types').Options;
        repo: import('ipfs-repo').IPFSRepo;
        codecs: import('ipfs-core-utils/src/multicodecs');
        isOnline: import('ipfs-core-types/src/root').API["isOnline"];
        keychain: import('libp2p/src/keychain');
        dns: import('ipfs-core-types/src/root').API["dns"];
    });
    publish: (value: string | import("multiformats").CID, options?: any) => Promise<import("ipfs-core-types/src/name").PublishResult>;
    resolve: (name: string, options?: any) => AsyncIterable<string>;
    pubsub: PubSubAPI;
}
import PubSubAPI = require("./pubsub");
//# sourceMappingURL=index.d.ts.map