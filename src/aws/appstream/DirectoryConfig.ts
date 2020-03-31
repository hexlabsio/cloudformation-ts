import { Value } from '../../kloudformation/Value';
import { ServiceAccountCredentialsProps } from './directoryconfig/ServiceAccountCredentialsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DirectoryConfigAttributes = {  }
export function directoryConfig(directoryConfigProps: DirectoryConfig): DirectoryConfig & { attributes: DirectoryConfigAttributes } { return ({ ...directoryConfigProps, _logicalType: 'AWS::AppStream::DirectoryConfig', attributes: {  } }) }

export interface DirectoryConfig extends KloudResource {
    organizationalUnitDistinguishedNames: Value<Value<string>[]>;
    serviceAccountCredentials: ServiceAccountCredentialsProps;
    directoryName: Value<string>;
}