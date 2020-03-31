import { Value } from '../../../kloudformation/Value';

export function nodeExporterProps(nodeExporterPropsProps: NodeExporterProps): NodeExporterProps { return (nodeExporterPropsProps) }

export interface NodeExporterProps {
    enabledInBroker: Value<boolean>;
}