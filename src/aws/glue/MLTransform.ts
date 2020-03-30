import { Value } from '../../kloudformation/Value';
import { TransformParametersProps } from './mltransform/TransformParametersProps';
import { InputRecordTablesProps } from './mltransform/InputRecordTablesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function mLTransform(mLTransformProps: MLTransform & { logicalName?: string }): MLTransform { return ({ ...mLTransformProps, _logicalType: 'AWS::Glue::MLTransform' }) as unknown as MLTransform }

export interface MLTransform extends KloudResource {
    role: Value<string>;
    transformParameters: TransformParametersProps;
    inputRecordTables: InputRecordTablesProps;
    maxRetries?: Value<number>;
    workerType?: Value<string>;
    description?: Value<string>;
    timeout?: Value<number>;
    glueVersion?: Value<string>;
    numberOfWorkers?: Value<number>;
    name?: Value<string>;
    maxCapacity?: Value<number>;
}