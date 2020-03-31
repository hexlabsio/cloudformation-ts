import { Value } from '../../kloudformation/Value';
import { ConfigurationProps } from './anomalydetector/ConfigurationProps';
import { DimensionProps } from './anomalydetector/DimensionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AnomalyDetectorAttributes = {  }
export function anomalyDetector(anomalyDetectorProps: AnomalyDetector): AnomalyDetector & { attributes: AnomalyDetectorAttributes } { return ({ ...anomalyDetectorProps, _logicalType: 'AWS::CloudWatch::AnomalyDetector', attributes: {  } }) }

export interface AnomalyDetector extends KloudResource {
    metricName: Value<string>;
    stat: Value<string>;
    namespace: Value<string>;
    configuration?: ConfigurationProps;
    dimensions?: DimensionProps[];
}