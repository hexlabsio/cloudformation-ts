import { Value } from '../../../kloudformation/Value';

export interface DeploymentConfigurationProps {
  maximumPercent?: Value<number>
  minimumHealthyPercent?: Value<number>
}