import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './organizationconformancepack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function conformancePack(conformancePackProps: ConformancePack & { logicalName?: string }): ConformancePack { return ({ ...conformancePackProps, _logicalType: 'AWS::Config::ConformancePack' }) as unknown as ConformancePack }

export interface ConformancePack extends KloudResource {
    conformancePackName: Value<string>;
    deliveryS3Bucket: Value<string>;
    deliveryS3KeyPrefix?: Value<string>;
    templateBody?: Value<string>;
    templateS3Uri?: Value<string>;
    conformancePackInputParameters?: ConformancePackInputParameterProps[];
}