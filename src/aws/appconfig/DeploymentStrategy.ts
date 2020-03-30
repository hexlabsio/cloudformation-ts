import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deploymentstrategy/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deploymentStrategy(deploymentStrategyProps: DeploymentStrategy & { logicalName?: string }): DeploymentStrategy { return ({ ...deploymentStrategyProps, _logicalType: 'AWS::AppConfig::DeploymentStrategy' }) as unknown as DeploymentStrategy }

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