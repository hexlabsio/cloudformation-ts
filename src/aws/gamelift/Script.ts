import { S3LocationProps } from './script/S3LocationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function script(scriptProps: Script & { logicalName?: string }): Script { return ({ ...scriptProps, _logicalType: 'AWS::GameLift::Script' }) as unknown as Script }

export interface Script extends KloudResource {
    storageLocation: S3LocationProps;
    version?: Value<string>;
    name?: Value<string>;
}