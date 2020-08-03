import { Value } from '../../kloudformation/Value';
import { ConfigurationProps } from './anomalyDetector/ConfigurationProps';
import { DimensionProps } from './anomalyDetector/DimensionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function anomalyDetector(anomalyDetectorProps: AnomalyDetector): AnomalyDetector { return ({ ...anomalyDetectorProps, _logicalType: '' }) }
  
export interface AnomalyDetector extends KloudResource {
  metricName: Value<string>
  stat: Value<string>
  configuration?: ConfigurationProps
  dimensions?: DimensionProps[]
  namespace: Value<string>
}