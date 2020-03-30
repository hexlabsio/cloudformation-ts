import { Value } from '../../kloudformation/Value';
import { DeploymentCanarySettingsProps } from './deployment/DeploymentCanarySettingsProps';
import { StageDescriptionProps } from './deployment/StageDescriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deployment(deploymentProps: Deployment & { logicalName?: string }): Deployment { return ({ ...deploymentProps, _logicalType: 'AWS::ApiGateway::Deployment' }) as unknown as Deployment }

export interface Deployment extends KloudResource {
    restApiId: Value<string>;
    deploymentCanarySettings?: DeploymentCanarySettingsProps;
    description?: Value<string>;
    stageDescription?: StageDescriptionProps;
    stageName?: Value<string>;
}