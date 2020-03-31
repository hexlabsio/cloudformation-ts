import { Value } from '../../../kloudformation/Value';

export function vpcSettingsProps(vpcSettingsPropsProps: VpcSettingsProps): VpcSettingsProps { return (vpcSettingsPropsProps) }

export interface VpcSettingsProps {
    subnetIds: Value<Value<string>[]>;
    vpcId: Value<string>;
}