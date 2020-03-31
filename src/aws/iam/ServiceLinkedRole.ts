import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ServiceLinkedRoleAttributes = {  }
export function serviceLinkedRole(serviceLinkedRoleProps: ServiceLinkedRole): ServiceLinkedRole & { attributes: ServiceLinkedRoleAttributes } { return ({ ...serviceLinkedRoleProps, _logicalType: 'AWS::IAM::ServiceLinkedRole', attributes: {  } }) }

export interface ServiceLinkedRole extends KloudResource {
    aWSServiceName: Value<string>;
    customSuffix?: Value<string>;
    description?: Value<string>;
}