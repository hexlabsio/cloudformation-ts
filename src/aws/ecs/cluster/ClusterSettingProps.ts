import { Value } from '../../../kloudformation/Value';

export function clusterSettingProps(clusterSettingPropsProps: ClusterSettingProps): ClusterSettingProps { return (clusterSettingPropsProps) }

export interface ClusterSettingProps {
    name: Value<string>;
    value: Value<string>;
}