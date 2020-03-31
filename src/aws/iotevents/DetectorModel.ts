import { DetectorModelDefinitionProps } from './detectormodel/DetectorModelDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DetectorModelAttributes = {  }
export function detectorModel(detectorModelProps: DetectorModel): DetectorModel & { attributes: DetectorModelAttributes } { return ({ ...detectorModelProps, _logicalType: 'AWS::IoTEvents::DetectorModel', attributes: {  } }) }

export interface DetectorModel extends KloudResource {
    detectorModelDefinition?: DetectorModelDefinitionProps;
    evaluationMethod?: Value<string>;
    detectorModelName?: Value<string>;
    detectorModelDescription?: Value<string>;
    key?: Value<string>;
    roleArn?: Value<string>;
    tags?: Tag[];
}