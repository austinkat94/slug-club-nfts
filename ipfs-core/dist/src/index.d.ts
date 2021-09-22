export type IPFS = import('ipfs-core-types').IPFS;
export type Options = import('./types').Options;
export type Libp2pFactoryFn = import('./types').Libp2pFactoryFn;
export type Libp2pFactoryFnArgs = import('./types').Libp2pFactoryFnArgs;
export type InitOptions = import('./types').InitOptions;
export type RelayOptions = import('./types').RelayOptions;
export type PreloadOptions = import('./types').PreloadOptions;
export type ExperimentalOptions = import('./types').ExperimentalOptions;
export type Preload = import('./types').Preload;
export type MfsPreload = import('./types').MfsPreload;
export type LoadBaseFn = import('./types').LoadBaseFn;
export type LoadCodecFn = import('./types').LoadCodecFn;
export type LoadHasherFn = import('./types').LoadHasherFn;
export type IPLDOptions = import('./types').IPLDOptions;
import { create } from "./components";
import crypto = require("libp2p-crypto");
import isIPFS = require("is-ipfs");
import { CID } from "multiformats/cid";
import { multiaddr } from "multiaddr";
import PeerId = require("peer-id");
import globSource = require("ipfs-utils/src/files/glob-source");
import urlSource = require("ipfs-utils/src/files/url-source");
export { create, crypto, isIPFS, CID, multiaddr, PeerId, globSource, urlSource };
//# sourceMappingURL=index.d.ts.map