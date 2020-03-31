import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './organizationconformancepack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConformancePackAttributes = {  }
export function conformancePack(conformancePackProps: ConformancePack): ConformancePack & { attributes: ConformancePackAttributes } { return ({ ...conformancePackProps, _logicalType: 'AWS::Config::ConformancePack', attributes: {  } }) }

export interface ConformancePack extends KloudResource {
    conformancePackName: Value<string>;
    deliveryS3Bucket: Value<string>;
    deliveryS3KeyPrefix?: Value<string>;
    templateBody?: Value<string>;
    templateS3Uri?: Value<string>;
    conformancePackInputParameters?: ConformancePackInputParameterProps[];
}