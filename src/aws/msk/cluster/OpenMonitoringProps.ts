import { PrometheusProps } from './PrometheusProps';

export function openMonitoringProps(openMonitoringPropsProps: OpenMonitoringProps): OpenMonitoringProps { return (openMonitoringPropsProps) }

export interface OpenMonitoringProps {
    prometheus: PrometheusProps;
}