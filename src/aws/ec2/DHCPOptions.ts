import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dHCPOptions(dHCPOptionsProps: DHCPOptions & { logicalName?: string }): DHCPOptions { return ({ ...dHCPOptionsProps, _logicalType: 'AWS::EC2::DHCPOptions' }) as unknown as DHCPOptions }

export interface DHCPOptions extends KloudResource {
    domainName?: Value<string>;
    domainNameServers?: Value<Value<string>[]>;
    netbiosNameServers?: Value<Value<string>[]>;
    netbiosNodeType?: Value<number>;
    ntpServers?: Value<Value<string>[]>;
    tags?: Tag[];
}