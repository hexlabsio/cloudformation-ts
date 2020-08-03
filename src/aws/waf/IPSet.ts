import { IPSetDescriptorProps } from './iPSet/IPSetDescriptorProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function iPSet(iPSetProps: IPSet): IPSet { return ({ ...iPSetProps, _logicalType: '' }) }
  
export interface IPSet extends KloudResource {
  iPSetDescriptors?: IPSetDescriptorProps[]
  name: Value<string>
}