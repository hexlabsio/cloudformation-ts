import { Value } from '../../kloudformation/Value';
import { ConfigurationProps } from './anomalydetector/ConfigurationProps';
import { DimensionProps } from './anomalydetector/DimensionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function anomalyDetector(anomalyDetectorProps: AnomalyDetector & { logicalName?: string }): AnomalyDetector { return ({ ...anomalyDetectorProps, _logicalType: 'AWS::CloudWatch::AnomalyDetector' }) as unknown as AnomalyDetector }

export interface AnomalyDetector extends KloudResource {
    metricName: Value<string>;
    stat: Value<string>;
    namespace: Value<string>;
    configuration?: ConfigurationProps;
    dimensions?: DimensionProps[];
}