import { Value } from '../../kloudformation/Value';
import { TransformParametersProps } from './mltransform/TransformParametersProps';
import { InputRecordTablesProps } from './mltransform/InputRecordTablesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MLTransformAttributes = {  }
export function mLTransform(mLTransformProps: MLTransform): MLTransform & { attributes: MLTransformAttributes } { return ({ ...mLTransformProps, _logicalType: 'AWS::Glue::MLTransform', attributes: {  } }) }

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