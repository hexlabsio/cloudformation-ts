import { Value } from '../../kloudformation/Value';
import { IPSetDescriptorProps } from '../wafregional/ipset/IPSetDescriptorProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IPSetAttributes = {  }
export function iPSet(iPSetProps: IPSet): IPSet & { attributes: IPSetAttributes } { return ({ ...iPSetProps, _logicalType: 'AWS::WAF::IPSet', attributes: {  } }) }

export interface IPSet extends KloudResource {
    name: Value<string>;
    iPSetDescriptors?: IPSetDescriptorProps[];
}