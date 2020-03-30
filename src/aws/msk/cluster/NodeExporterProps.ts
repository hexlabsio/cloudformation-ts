import { Value } from '../../../kloudformation/Value';

export function nodeExporterProps(nodeExporterPropsProps: NodeExporterProps): NodeExporterProps { return (nodeExporterPropsProps) as unknown as NodeExporterProps }

export interface NodeExporterProps {
    enabledInBroker: Value<boolean>;
}