/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.zero();
export const ONE_BI = BigInt.fromI32(1);
export const ZERO_BD = BigDecimal.zero();
export const ONE_BD = BigDecimal.fromString("1");

export const ZERO_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export function toBigDecimal(quantity: BigInt, decimals: i32 = 18): BigDecimal {
  return quantity.divDecimal(
    BigInt.fromI32(10)
      .pow(decimals as u8)
      .toBigDecimal()
  );
}

export function parseEther(quantity: i32, decimals: u8 = 18): BigInt {
  const adjuster = BigInt.fromI32(10).pow(decimals);
  return BigInt.fromI32(quantity).times(adjuster);
}