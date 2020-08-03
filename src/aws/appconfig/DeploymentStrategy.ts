import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deploymentStrategy/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deploymentStrategy(deploymentStrategyProps: DeploymentStrategy): DeploymentStrategy { return ({ ...deploymentStrategyProps, _logicalType: '' }) }
  
export interface DeploymentStrategy extends KloudResource {
  replicateTo: Value<string>
  growthType?: Value<string>
  description?: Value<string>
  deploymentDurationInMinutes: Value<number>
  growthFactor: Value<number>
  finalBakeTimeInMinutes?: Value<number>
  tags?: TagsProps[]
  name: Value<string>
}