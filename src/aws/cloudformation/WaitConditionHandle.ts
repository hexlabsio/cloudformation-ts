import { KloudResource } from '../../kloudformation/KloudResource';

export function waitConditionHandle(waitConditionHandleProps: WaitConditionHandle & { logicalName?: string }): WaitConditionHandle { return ({ ...waitConditionHandleProps, _logicalType: 'AWS::CloudFormation::WaitConditionHandle' }) as unknown as WaitConditionHandle }

export interface WaitConditionHandle extends KloudResource {

}