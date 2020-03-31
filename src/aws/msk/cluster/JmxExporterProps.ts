import { Value } from '../../../kloudformation/Value';

export function jmxExporterProps(jmxExporterPropsProps: JmxExporterProps): JmxExporterProps { return (jmxExporterPropsProps) }

export interface JmxExporterProps {
    enabledInBroker: Value<boolean>;
}