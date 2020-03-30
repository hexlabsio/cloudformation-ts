import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourcePolicy(resourcePolicyProps: ResourcePolicy & { logicalName?: string }): ResourcePolicy { return ({ ...resourcePolicyProps, _logicalType: 'AWS::SecretsManager::ResourcePolicy' }) as unknown as ResourcePolicy }

export interface ResourcePolicy extends KloudResource {
    secretId: Value<string>;
    resourcePolicy: Value<any>;
}