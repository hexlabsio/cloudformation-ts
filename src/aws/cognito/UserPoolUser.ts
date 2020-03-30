import { Value } from '../../kloudformation/Value';
import { AttributeTypeProps } from './userpooluser/AttributeTypeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolUser(userPoolUserProps: UserPoolUser & { logicalName?: string }): UserPoolUser { return ({ ...userPoolUserProps, _logicalType: 'AWS::Cognito::UserPoolUser' }) as unknown as UserPoolUser }

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