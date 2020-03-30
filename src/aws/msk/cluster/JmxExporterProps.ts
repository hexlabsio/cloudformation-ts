import { Value } from '../../../kloudformation/Value';

export function jmxExporterProps(jmxExporterPropsProps: JmxExporterProps): JmxExporterProps { return (jmxExporterPropsProps) as unknown as JmxExporterProps }

export interface JmxExporterProps {
    enabledInBroker: Value<boolean>;
}