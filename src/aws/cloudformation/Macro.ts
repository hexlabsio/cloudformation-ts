import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MacroAttributes = {  }
export function macro(macroProps: Macro): Macro & { attributes: MacroAttributes } { return ({ ...macroProps, _logicalType: 'AWS::CloudFormation::Macro', attributes: {  } }) }

export interface Macro extends KloudResource {
    functionName: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    logGroupName?: Value<string>;
    logRoleARN?: Value<string>;
}