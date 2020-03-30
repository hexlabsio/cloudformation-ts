import { LifecyclePolicyProps } from './repository/LifecyclePolicyProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function repository(repositoryProps: Repository & { logicalName?: string }): Repository { return ({ ...repositoryProps, _logicalType: 'AWS::ECR::Repository' }) as unknown as Repository }

export interface Repository extends KloudResource {
    lifecyclePolicy?: LifecyclePolicyProps;
    repositoryName?: Value<string>;
    repositoryPolicyText?: Value<any>;
    tags?: Tag[];
}