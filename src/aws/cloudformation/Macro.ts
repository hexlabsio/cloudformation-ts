import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function macro(macroProps: Macro & { logicalName?: string }): Macro { return ({ ...macroProps, _logicalType: 'AWS::CloudFormation::Macro' }) as unknown as Macro }

export interface Macro extends KloudResource {
    functionName: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    logGroupName?: Value<string>;
    logRoleARN?: Value<string>;
}