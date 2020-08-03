import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AccessKeyAttributes = { SecretAccessKey: Attribute<string> }
export function accessKey(accessKeyProps: AccessKey): AccessKey & {attributes: AccessKeyAttributes} { return ({ ...accessKeyProps, _logicalType: 'AWS::IAM::AccessKey', attributes: { SecretAccessKey: 'SecretAccessKey' } }) }
   
export interface AccessKey extends KloudResource {
  serial?: Value<number>
  status?: Value<string>
  userName: Value<string>
}