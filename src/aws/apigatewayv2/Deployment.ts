import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deployment(deploymentProps: Deployment): Deployment { return ({ ...deploymentProps, _logicalType: '' }) }
  
export interface Deployment extends KloudResource {
  description?: Value<string>
  stageName?: Value<string>
  apiId: Value<string>
}