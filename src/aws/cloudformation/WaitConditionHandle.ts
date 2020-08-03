import { KloudResource } from '../../kloudformation/KloudResource';
export function waitConditionHandle(waitConditionHandleProps: WaitConditionHandle): WaitConditionHandle { return ({ ...waitConditionHandleProps, _logicalType: '' }) }
  
export interface WaitConditionHandle extends KloudResource {
  
}