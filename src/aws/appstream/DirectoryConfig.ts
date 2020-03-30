import { Value } from '../../kloudformation/Value';
import { ServiceAccountCredentialsProps } from './directoryconfig/ServiceAccountCredentialsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function directoryConfig(directoryConfigProps: DirectoryConfig & { logicalName?: string }): DirectoryConfig { return ({ ...directoryConfigProps, _logicalType: 'AWS::AppStream::DirectoryConfig' }) as unknown as DirectoryConfig }

export interface DirectoryConfig extends KloudResource {
    organizationalUnitDistinguishedNames: Value<Value<string>[]>;
    serviceAccountCredentials: ServiceAccountCredentialsProps;
    directoryName: Value<string>;
}