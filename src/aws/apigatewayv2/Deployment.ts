import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deployment(deploymentProps: Deployment & { logicalName?: string }): Deployment { return ({ ...deploymentProps, _logicalType: 'AWS::ApiGatewayV2::Deployment' }) as unknown as Deployment }

export interface Deployment extends KloudResource {
    apiId: Value<string>;
    description?: Value<string>;
    stageName?: Value<string>;
}