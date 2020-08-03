import { Value } from '../../../kloudformation/Value';
import { StorageDescriptorProps } from './StorageDescriptorProps';

export interface PartitionInputProps {
  parameters?: Value<any>
  storageDescriptor?: StorageDescriptorProps
  values: Value<Value<string>[]>
}