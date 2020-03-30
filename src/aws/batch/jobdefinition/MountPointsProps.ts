import { Value } from '../../../kloudformation/Value';

export function mountPointsProps(mountPointsPropsProps: MountPointsProps): MountPointsProps { return (mountPointsPropsProps) as unknown as MountPointsProps }

export interface MountPointsProps {
    readOnly?: Value<boolean>;
    sourceVolume?: Value<string>;
    containerPath?: Value<string>;
}