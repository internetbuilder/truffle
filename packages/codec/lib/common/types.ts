import BN from "bn.js";

/**
 * @Category Enumerations
 */
export type Location = "storage" | "memory" | "calldata";
/**
 * @Category Enumerations
 */
export type Visibility = "internal" | "external";
/**
 * @Category Enumerations
 */
export type Mutability = "pure" | "view" | "nonpayable" | "payable";
/**
 * @Category Enumerations
 */
export type ContractKind = "contract" | "library" | "interface";

/**
 * This error indicates that the decoder was unable to locate a user-defined
 * type (struct, enum, or contract type) via its ID.  Unfortunately, we can't
 * always avoid this at the moment; we're hoping to make this more robust in
 * the future with Truffle DB.  In the meantime, it is at least worth noting that
 * you should not encounter this error if your entire project was written in
 * Solidity and all compiled at once.  Sorry.
 *
 * @Category Errors
 */
export class UnknownUserDefinedTypeError extends Error {
  public typeString: string;
  public id: string;
  constructor(id: string, typeString: string) {
    const message = `Cannot locate definition for ${typeString} (ID ${id})`;
    super(message);
    this.name = "UnknownUserDefinedTypeError";
    this.id = id;
    this.typeString = typeString;
  }
}

/**
 * Type for transaction options, including
 * Quorum-specific ones (privateFor) and
 * Truffle-specific ones (overwrite)
 *
 * @Category Interfaces
 */
export interface Options {
  // NOTE: If adding options, please also add them to
  // the appropriate section of wrapOptions in
  // wrap/wrap.ts!
  // [you should just be able to add it to the appropriate
  // section for uints/addreses/bytestrings/boleans.
  // For other types you may potentially want to add new sections.
  // If it's something weird like privateFor... you may just
  // have to do things manually, sorry.]
  /**
   * This should be an address
   */
  from?: string;
  /**
   * This should be an address
   */
  to?: string;
  gas?: BN;
  gasPrice?: BN;
  value?: BN;
  /**
   * This should be a bytestring (even-length hex string, with "0x")
   */
  data?: string;
  nonce?: BN;
  /**
   * Quorum-specific; this should be an array of base64-encoded strings,
   * each of which encodes a 32-byte bytestring
   */
  privateFor?: string[];
  /**
   * Truffle-specific
   */
  overwrite?: boolean;
}
