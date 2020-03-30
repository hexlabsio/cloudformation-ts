import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function volume(volumeProps: Volume & { logicalName?: string }): Volume { return ({ ...volumeProps, _logicalType: 'AWS::OpsWorks::Volume' }) as unknown as Volume }

export interface Volume extends KloudResource {
    ec2VolumeId: Value<string>;
    stackId: Value<string>;
    mountPoint?: Value<string>;
    name?: Value<string>;
}