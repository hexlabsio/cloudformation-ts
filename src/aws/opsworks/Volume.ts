import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VolumeAttributes = {  }
export function volume(volumeProps: Volume): Volume & { attributes: VolumeAttributes } { return ({ ...volumeProps, _logicalType: 'AWS::OpsWorks::Volume', attributes: {  } }) }

export interface Volume extends KloudResource {
    ec2VolumeId: Value<string>;
    stackId: Value<string>;
    mountPoint?: Value<string>;
    name?: Value<string>;
}