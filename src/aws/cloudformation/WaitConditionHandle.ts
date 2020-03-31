import { KloudResource } from '../../kloudformation/KloudResource';

export type WaitConditionHandleAttributes = {  }
export function waitConditionHandle(waitConditionHandleProps: WaitConditionHandle): WaitConditionHandle & { attributes: WaitConditionHandleAttributes } { return ({ ...waitConditionHandleProps, _logicalType: 'AWS::CloudFormation::WaitConditionHandle', attributes: {  } }) }

export interface WaitConditionHandle extends KloudResource {

}