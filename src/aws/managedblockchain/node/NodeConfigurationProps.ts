import { Value } from '../../../kloudformation/Value';

export function nodeConfigurationProps(nodeConfigurationPropsProps: NodeConfigurationProps): NodeConfigurationProps { return (nodeConfigurationPropsProps) }

export interface NodeConfigurationProps {
    availabilityZone: Value<string>;
    instanceType: Value<string>;
}