import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deploymentstrategy/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeploymentStrategyAttributes = {  }
export function deploymentStrategy(deploymentStrategyProps: DeploymentStrategy): DeploymentStrategy & { attributes: DeploymentStrategyAttributes } { return ({ ...deploymentStrategyProps, _logicalType: 'AWS::AppConfig::DeploymentStrategy', attributes: {  } }) }

export interface DeploymentStrategy extends KloudResource {
    replicateTo: Value<string>;
    deploymentDurationInMinutes: Value<number>;
    growthFactor: Value<number>;
    name: Value<string>;
    growthType?: Value<string>;
    description?: Value<string>;
    finalBakeTimeInMinutes?: Value<number>;
    tags?: TagsProps[];
}