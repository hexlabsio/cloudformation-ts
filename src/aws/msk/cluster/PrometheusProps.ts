import { JmxExporterProps } from './JmxExporterProps';
import { NodeExporterProps } from './NodeExporterProps';

export function prometheusProps(prometheusPropsProps: PrometheusProps): PrometheusProps { return (prometheusPropsProps) }

export interface PrometheusProps {
    jmxExporter?: JmxExporterProps;
    nodeExporter?: NodeExporterProps;
}