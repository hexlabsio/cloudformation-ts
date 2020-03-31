import { Value } from '../../kloudformation/Value';
import { DeploymentCanarySettingsProps } from './deployment/DeploymentCanarySettingsProps';
import { StageDescriptionProps } from './deployment/StageDescriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeploymentAttributes = {  }
export function deployment(deploymentProps: Deployment): Deployment & { attributes: DeploymentAttributes } { return ({ ...deploymentProps, _logicalType: 'AWS::ApiGateway::Deployment', attributes: {  } }) }

export interface Deployment extends KloudResource {
    restApiId: Value<string>;
    deploymentCanarySettings?: DeploymentCanarySettingsProps;
    description?: Value<string>;
    stageDescription?: StageDescriptionProps;
    stageName?: Value<string>;
}