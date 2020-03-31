import { Value } from '../../../kloudformation/Value';

export function setVariableProps(setVariablePropsProps: SetVariableProps): SetVariableProps { return (setVariablePropsProps) }

export interface SetVariableProps {
    variableName?: Value<string>;
    value?: Value<string>;
}