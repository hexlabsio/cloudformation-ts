import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function accessKey(accessKeyProps: AccessKey & { logicalName?: string }): AccessKey { return ({ ...accessKeyProps, _logicalType: 'AWS::IAM::AccessKey' }) as unknown as AccessKey }

export interface AccessKey extends KloudResource {
    userName: Value<string>;
    serial?: Value<number>;
    status?: Value<string>;
}