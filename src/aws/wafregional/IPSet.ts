import { Value } from '../../kloudformation/Value';
import { IPSetDescriptorProps } from './ipset/IPSetDescriptorProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IPSetAttributes = {  }
export function iPSet(iPSetProps: IPSet): IPSet & { attributes: IPSetAttributes } { return ({ ...iPSetProps, _logicalType: 'AWS::WAFRegional::IPSet', attributes: {  } }) }

export interface IPSet extends KloudResource {
    name: Value<string>;
    iPSetDescriptors?: IPSetDescriptorProps[];
}