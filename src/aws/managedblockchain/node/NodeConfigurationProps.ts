import { Value } from '../../../kloudformation/Value';

export function nodeConfigurationProps(nodeConfigurationPropsProps: NodeConfigurationProps): NodeConfigurationProps { return (nodeConfigurationPropsProps) as unknown as NodeConfigurationProps }

export interface NodeConfigurationProps {
    availabilityZone: Value<string>;
    instanceType: Value<string>;
}