import { Value } from '../../../kloudformation/Value';

export function setVariableProps(setVariablePropsProps: SetVariableProps): SetVariableProps { return (setVariablePropsProps) as unknown as SetVariableProps }

export interface SetVariableProps {
    variableName?: Value<string>;
    value?: Value<string>;
}