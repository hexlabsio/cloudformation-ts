import { Value } from '../../kloudformation/Value';
import { TagsProps } from './deployment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deployment(deploymentProps: Deployment & { logicalName?: string }): Deployment { return ({ ...deploymentProps, _logicalType: 'AWS::AppConfig::Deployment' }) as unknown as Deployment }

export interface Deployment extends KloudResource {
    deploymentStrategyId: Value<string>;
    configurationProfileId: Value<string>;
    environmentId: Value<string>;
    configurationVersion: Value<string>;
    applicationId: Value<string>;
    description?: Value<string>;
    tags?: TagsProps[];
}