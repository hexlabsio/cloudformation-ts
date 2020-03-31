import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AccessKeyAttributes = { SecretAccessKey: Attribute<string> }
export function accessKey(accessKeyProps: AccessKey): AccessKey & { attributes: AccessKeyAttributes } { return ({ ...accessKeyProps, _logicalType: 'AWS::IAM::AccessKey', attributes: { SecretAccessKey: 'SecretAccessKey' } }) }

export interface AccessKey extends KloudResource {
    userName: Value<string>;
    serial?: Value<number>;
    status?: Value<string>;
}