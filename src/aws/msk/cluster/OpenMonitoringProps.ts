import { PrometheusProps } from './PrometheusProps';

export function openMonitoringProps(openMonitoringPropsProps: OpenMonitoringProps): OpenMonitoringProps { return (openMonitoringPropsProps) as unknown as OpenMonitoringProps }

export interface OpenMonitoringProps {
    prometheus: PrometheusProps;
}