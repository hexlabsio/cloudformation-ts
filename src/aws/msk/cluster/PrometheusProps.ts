import { JmxExporterProps } from './JmxExporterProps';
import { NodeExporterProps } from './NodeExporterProps';

export interface PrometheusProps {
  jmxExporter?: JmxExporterProps
  nodeExporter?: NodeExporterProps
}