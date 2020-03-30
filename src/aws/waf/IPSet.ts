import { Value } from '../../kloudformation/Value';
import { IPSetDescriptorProps } from '../wafregional/ipset/IPSetDescriptorProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function iPSet(iPSetProps: IPSet & { logicalName?: string }): IPSet { return ({ ...iPSetProps, _logicalType: 'AWS::WAF::IPSet' }) as unknown as IPSet }

export interface IPSet extends KloudResource {
    name: Value<string>;
    iPSetDescriptors?: IPSetDescriptorProps[];
}