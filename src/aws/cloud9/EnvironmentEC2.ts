import { Value } from '../../kloudformation/Value';
import { RepositoryProps } from './environmentec2/RepositoryProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function environmentEC2(environmentEC2Props: EnvironmentEC2 & { logicalName?: string }): EnvironmentEC2 { return ({ ...environmentEC2Props, _logicalType: 'AWS::Cloud9::EnvironmentEC2' }) as unknown as EnvironmentEC2 }

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