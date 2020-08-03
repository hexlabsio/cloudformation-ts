import { DetectorModelDefinitionProps } from './detectorModel/DetectorModelDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function detectorModel(detectorModelProps: DetectorModel): DetectorModel { return ({ ...detectorModelProps, _logicalType: '' }) }
  
export interface DetectorModel extends KloudResource {
  detectorModelDefinition?: DetectorModelDefinitionProps
  evaluationMethod?: Value<string>
  detectorModelName?: Value<string>
  detectorModelDescription?: Value<string>
  key?: Value<string>
  roleArn?: Value<string>
  tags?: Tag[]
}