import { VolumesHostProps } from './VolumesHostProps';
import { Value } from '../../../kloudformation/Value';

export function volumesProps(volumesPropsProps: VolumesProps): VolumesProps { return (volumesPropsProps) }

export interface VolumesProps {
    host?: VolumesHostProps;
    name?: Value<string>;
}