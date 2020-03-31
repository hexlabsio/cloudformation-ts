import { Value } from '../../kloudformation/Value';
import { RepositoryProps } from './environmentec2/RepositoryProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EnvironmentEC2Attributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function environmentEC2(environmentEC2Props: EnvironmentEC2): EnvironmentEC2 & { attributes: EnvironmentEC2Attributes } { return ({ ...environmentEC2Props, _logicalType: 'AWS::Cloud9::EnvironmentEC2', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface EnvironmentEC2 extends KloudResource {
    instanceType: Value<string>;
    repositories?: RepositoryProps[];
    ownerArn?: Value<string>;
    description?: Value<string>;
    automaticStopTimeMinutes?: Value<number>;
    subnetId?: Value<string>;
    tags?: Tag[];
    name?: Value<string>;
}