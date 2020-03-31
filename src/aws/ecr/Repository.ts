import { LifecyclePolicyProps } from './repository/LifecyclePolicyProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RepositoryAttributes = { Arn: Attribute<string> }
export function repository(repositoryProps: Repository): Repository & { attributes: RepositoryAttributes } { return ({ ...repositoryProps, _logicalType: 'AWS::ECR::Repository', attributes: { Arn: 'Arn' } }) }

export interface Repository extends KloudResource {
    lifecyclePolicy?: LifecyclePolicyProps;
    repositoryName?: Value<string>;
    repositoryPolicyText?: Value<any>;
    tags?: Tag[];
}