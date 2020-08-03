import { AttributeTypeProps } from './userPoolUser/AttributeTypeProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolUser(userPoolUserProps: UserPoolUser): UserPoolUser { return ({ ...userPoolUserProps, _logicalType: '' }) }
  
export interface UserPoolUser extends KloudResource {
  validationData?: AttributeTypeProps[]
  userPoolId: Value<string>
  username?: Value<string>
  messageAction?: Value<string>
  clientMetadata?: Value<any>
  desiredDeliveryMediums?: Value<Value<string>[]>
  forceAliasCreation?: Value<boolean>
  userAttributes?: AttributeTypeProps[]
}