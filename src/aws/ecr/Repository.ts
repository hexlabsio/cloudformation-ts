import { LifecyclePolicyProps } from './repository/LifecyclePolicyProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RepositoryAttributes = { Arn: Attribute<string> }
export function repository(repositoryProps: Repository): Repository & {attributes: RepositoryAttributes} { return ({ ...repositoryProps, _logicalType: 'AWS::ECR::Repository', attributes: { Arn: 'Arn' } }) }
   
export interface Repository extends KloudResource {
  lifecyclePolicy?: LifecyclePolicyProps
  repositoryName?: Value<string>
  repositoryPolicyText?: Value<any>
  tags?: Tag[]
}