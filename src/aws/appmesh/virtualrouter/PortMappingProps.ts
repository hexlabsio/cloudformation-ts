import { Value } from '../../../kloudformation/Value';

export function portMappingProps(portMappingPropsProps: PortMappingProps): PortMappingProps { return (portMappingPropsProps) }

export interface PortMappingProps {
    port: Value<number>;
    protocol: Value<string>;
}