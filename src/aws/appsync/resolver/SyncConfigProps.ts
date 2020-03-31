import { Value } from '../../../kloudformation/Value';
import { LambdaConflictHandlerConfigProps } from './LambdaConflictHandlerConfigProps';

export function syncConfigProps(syncConfigPropsProps: SyncConfigProps): SyncConfigProps { return (syncConfigPropsProps) }

export interface SyncConfigProps {
    conflictDetection: Value<string>;
    conflictHandler?: Value<string>;
    lambdaConflictHandlerConfig?: LambdaConflictHandlerConfigProps;
}