import { Value } from '../../kloudformation/Value';
import { S3LocationProps } from './build/S3LocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type BuildAttributes = {  }
export function build(buildProps: Build): Build & { attributes: BuildAttributes } { return ({ ...buildProps, _logicalType: 'AWS::GameLift::Build', attributes: {  } }) }

export interface Build extends KloudResource {
    name?: Value<string>;
    operatingSystem?: Value<string>;
    storageLocation?: S3LocationProps;
    version?: Value<string>;
}