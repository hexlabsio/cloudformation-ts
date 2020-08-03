import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './conformancePack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function conformancePack(conformancePackProps: ConformancePack): ConformancePack { return ({ ...conformancePackProps, _logicalType: '' }) }
  
export interface ConformancePack extends KloudResource {
  conformancePackName: Value<string>
  deliveryS3Bucket: Value<string>
  deliveryS3KeyPrefix?: Value<string>
  templateBody?: Value<string>
  templateS3Uri?: Value<string>
  conformancePackInputParameters?: ConformancePackInputParameterProps[]
}