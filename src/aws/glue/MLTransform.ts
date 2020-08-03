import { Value } from '../../kloudformation/Value';
import { TransformParametersProps } from './mLTransform/TransformParametersProps';
import { InputRecordTablesProps } from './mLTransform/InputRecordTablesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function mLTransform(mLTransformProps: MLTransform): MLTransform { return ({ ...mLTransformProps, _logicalType: '' }) }
  
export interface MLTransform extends KloudResource {
  role: Value<string>
  maxRetries?: Value<number>
  workerType?: Value<string>
  description?: Value<string>
  timeout?: Value<number>
  glueVersion?: Value<string>
  transformParameters: TransformParametersProps
  inputRecordTables: InputRecordTablesProps
  numberOfWorkers?: Value<number>
  tags?: Value<any>
  name?: Value<string>
  maxCapacity?: Value<number>
}