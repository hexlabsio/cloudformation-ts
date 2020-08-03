import { Value } from '../../../kloudformation/Value';
import { LambdaConflictHandlerConfigProps } from './LambdaConflictHandlerConfigProps';

export interface SyncConfigProps {
  conflictHandler?: Value<string>
  conflictDetection: Value<string>
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfigProps
}