import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deployment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeploymentAttributes = {  }
export function deployment(deploymentProps: Deployment): Deployment & { attributes: DeploymentAttributes } { return ({ ...deploymentProps, _logicalType: 'AWS::AppConfig::Deployment', attributes: {  } }) }

export interface Deployment extends KloudResource {
    deploymentStrategyId: Value<string>;
    configurationProfileId: Value<string>;
    environmentId: Value<string>;
    configurationVersion: Value<string>;
    applicationId: Value<string>;
    description?: Value<string>;
    tags?: TagsProps[];
}