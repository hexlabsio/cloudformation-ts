import { VolumesHostProps } from './VolumesHostProps';
import { Value } from '../../../kloudformation/Value';

export function volumesProps(volumesPropsProps: VolumesProps): VolumesProps { return (volumesPropsProps) as unknown as VolumesProps }

export interface VolumesProps {
    host?: VolumesHostProps;
    name?: Value<string>;
}