import { DeploymentCanarySettingsProps } from './deployment/DeploymentCanarySettingsProps';
import { Value } from '../../kloudformation/Value';
import { StageDescriptionProps } from './deployment/StageDescriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deployment(deploymentProps: Deployment): Deployment { return ({ ...deploymentProps, _logicalType: '' }) }
  
export interface Deployment extends KloudResource {
  deploymentCanarySettings?: DeploymentCanarySettingsProps
  description?: Value<string>
  restApiId: Value<string>
  stageDescription?: StageDescriptionProps
  stageName?: Value<string>
}