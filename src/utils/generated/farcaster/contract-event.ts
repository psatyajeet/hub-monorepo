// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ContractEventType } from '../farcaster/contract-event-type';


export class ContractEvent {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ContractEvent {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsContractEvent(bb:flatbuffers.ByteBuffer, obj?:ContractEvent):ContractEvent {
  return (obj || new ContractEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsContractEvent(bb:flatbuffers.ByteBuffer, obj?:ContractEvent):ContractEvent {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ContractEvent()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

blockNumber():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

blockHash(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

blockHashLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

blockHashArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

transactionHash(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

transactionHashLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

transactionHashArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

logIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

fid(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

fidLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

fidArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

to(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

toLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

toArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

type():ContractEventType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ContractEventType.IdRegistryRegister;
}

from(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

fromLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

fromArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startContractEvent(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addBlockNumber(builder:flatbuffers.Builder, blockNumber:number) {
  builder.addFieldInt32(0, blockNumber, 0);
}

static addBlockHash(builder:flatbuffers.Builder, blockHashOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, blockHashOffset, 0);
}

static createBlockHashVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startBlockHashVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addTransactionHash(builder:flatbuffers.Builder, transactionHashOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, transactionHashOffset, 0);
}

static createTransactionHashVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startTransactionHashVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addLogIndex(builder:flatbuffers.Builder, logIndex:number) {
  builder.addFieldInt16(3, logIndex, 0);
}

static addFid(builder:flatbuffers.Builder, fidOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, fidOffset, 0);
}

static createFidVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFidVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addTo(builder:flatbuffers.Builder, toOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, toOffset, 0);
}

static createToVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startToVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addType(builder:flatbuffers.Builder, type:ContractEventType) {
  builder.addFieldInt8(6, type, ContractEventType.IdRegistryRegister);
}

static addFrom(builder:flatbuffers.Builder, fromOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, fromOffset, 0);
}

static createFromVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startFromVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endContractEvent(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // block_hash
  builder.requiredField(offset, 8) // transaction_hash
  return offset;
}

static finishContractEventBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedContractEventBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

static createContractEvent(builder:flatbuffers.Builder, blockNumber:number, blockHashOffset:flatbuffers.Offset, transactionHashOffset:flatbuffers.Offset, logIndex:number, fidOffset:flatbuffers.Offset, toOffset:flatbuffers.Offset, type:ContractEventType, fromOffset:flatbuffers.Offset):flatbuffers.Offset {
  ContractEvent.startContractEvent(builder);
  ContractEvent.addBlockNumber(builder, blockNumber);
  ContractEvent.addBlockHash(builder, blockHashOffset);
  ContractEvent.addTransactionHash(builder, transactionHashOffset);
  ContractEvent.addLogIndex(builder, logIndex);
  ContractEvent.addFid(builder, fidOffset);
  ContractEvent.addTo(builder, toOffset);
  ContractEvent.addType(builder, type);
  ContractEvent.addFrom(builder, fromOffset);
  return ContractEvent.endContractEvent(builder);
}

unpack(): ContractEventT {
  return new ContractEventT(
    this.blockNumber(),
    this.bb!.createScalarList(this.blockHash.bind(this), this.blockHashLength()),
    this.bb!.createScalarList(this.transactionHash.bind(this), this.transactionHashLength()),
    this.logIndex(),
    this.bb!.createScalarList(this.fid.bind(this), this.fidLength()),
    this.bb!.createScalarList(this.to.bind(this), this.toLength()),
    this.type(),
    this.bb!.createScalarList(this.from.bind(this), this.fromLength())
  );
}


unpackTo(_o: ContractEventT): void {
  _o.blockNumber = this.blockNumber();
  _o.blockHash = this.bb!.createScalarList(this.blockHash.bind(this), this.blockHashLength());
  _o.transactionHash = this.bb!.createScalarList(this.transactionHash.bind(this), this.transactionHashLength());
  _o.logIndex = this.logIndex();
  _o.fid = this.bb!.createScalarList(this.fid.bind(this), this.fidLength());
  _o.to = this.bb!.createScalarList(this.to.bind(this), this.toLength());
  _o.type = this.type();
  _o.from = this.bb!.createScalarList(this.from.bind(this), this.fromLength());
}
}

export class ContractEventT {
constructor(
  public blockNumber: number = 0,
  public blockHash: (number)[] = [],
  public transactionHash: (number)[] = [],
  public logIndex: number = 0,
  public fid: (number)[] = [],
  public to: (number)[] = [],
  public type: ContractEventType = ContractEventType.IdRegistryRegister,
  public from: (number)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const blockHash = ContractEvent.createBlockHashVector(builder, this.blockHash);
  const transactionHash = ContractEvent.createTransactionHashVector(builder, this.transactionHash);
  const fid = ContractEvent.createFidVector(builder, this.fid);
  const to = ContractEvent.createToVector(builder, this.to);
  const from = ContractEvent.createFromVector(builder, this.from);

  return ContractEvent.createContractEvent(builder,
    this.blockNumber,
    blockHash,
    transactionHash,
    this.logIndex,
    fid,
    to,
    this.type,
    from
  );
}
}
