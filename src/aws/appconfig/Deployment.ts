import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deployment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deployment(deploymentProps: Deployment): Deployment { return ({ ...deploymentProps, _logicalType: '' }) }
  
export interface Deployment extends KloudResource {
  deploymentStrategyId: Value<string>
  configurationProfileId: Value<string>
  environmentId: Value<string>
  description?: Value<string>
  configurationVersion: Value<string>
  applicationId: Value<string>
  tags?: TagsProps[]
}