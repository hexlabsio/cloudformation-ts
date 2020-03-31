import { Value } from '../../kloudformation/Value';
import { AttributeTypeProps } from './userpooluser/AttributeTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolUserAttributes = {  }
export function userPoolUser(userPoolUserProps: UserPoolUser): UserPoolUser & { attributes: UserPoolUserAttributes } { return ({ ...userPoolUserProps, _logicalType: 'AWS::Cognito::UserPoolUser', attributes: {  } }) }

export interface UserPoolUser extends KloudResource {
    userPoolId: Value<string>;
    validationData?: AttributeTypeProps[];
    username?: Value<string>;
    messageAction?: Value<string>;
    clientMetadata?: Value<any>;
    desiredDeliveryMediums?: Value<Value<string>[]>;
    forceAliasCreation?: Value<boolean>;
    userAttributes?: AttributeTypeProps[];
}