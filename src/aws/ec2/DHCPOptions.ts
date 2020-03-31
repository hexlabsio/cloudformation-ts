import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DHCPOptionsAttributes = {  }
export function dHCPOptions(dHCPOptionsProps: DHCPOptions): DHCPOptions & { attributes: DHCPOptionsAttributes } { return ({ ...dHCPOptionsProps, _logicalType: 'AWS::EC2::DHCPOptions', attributes: {  } }) }

export interface DHCPOptions extends KloudResource {
    domainName?: Value<string>;
    domainNameServers?: Value<Value<string>[]>;
    netbiosNameServers?: Value<Value<string>[]>;
    netbiosNodeType?: Value<number>;
    ntpServers?: Value<Value<string>[]>;
    tags?: Tag[];
}