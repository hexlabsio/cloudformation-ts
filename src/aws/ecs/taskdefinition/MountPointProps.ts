import { Value } from '../../../kloudformation/Value';

export function mountPointProps(mountPointPropsProps: MountPointProps): MountPointProps { return (mountPointPropsProps) as unknown as MountPointProps }

export interface MountPointProps {
    containerPath?: Value<string>;
    readOnly?: Value<boolean>;
    sourceVolume?: Value<string>;
}