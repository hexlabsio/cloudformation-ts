import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ResourcePolicyAttributes = {  }
export function resourcePolicy(resourcePolicyProps: ResourcePolicy): ResourcePolicy & { attributes: ResourcePolicyAttributes } { return ({ ...resourcePolicyProps, _logicalType: 'AWS::SecretsManager::ResourcePolicy', attributes: {  } }) }

export interface ResourcePolicy extends KloudResource {
    secretId: Value<string>;
    resourcePolicy: Value<any>;
}