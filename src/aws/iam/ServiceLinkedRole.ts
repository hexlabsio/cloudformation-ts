import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function serviceLinkedRole(serviceLinkedRoleProps: ServiceLinkedRole & { logicalName?: string }): ServiceLinkedRole { return ({ ...serviceLinkedRoleProps, _logicalType: 'AWS::IAM::ServiceLinkedRole' }) as unknown as ServiceLinkedRole }

export interface ServiceLinkedRole extends KloudResource {
    aWSServiceName: Value<string>;
    customSuffix?: Value<string>;
    description?: Value<string>;
}