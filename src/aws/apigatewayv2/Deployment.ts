import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeploymentAttributes = {  }
export function deployment(deploymentProps: Deployment): Deployment & { attributes: DeploymentAttributes } { return ({ ...deploymentProps, _logicalType: 'AWS::ApiGatewayV2::Deployment', attributes: {  } }) }

export interface Deployment extends KloudResource {
    apiId: Value<string>;
    description?: Value<string>;
    stageName?: Value<string>;
}