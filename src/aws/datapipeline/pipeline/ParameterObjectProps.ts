import { ParameterAttributeProps } from './ParameterAttributeProps';
import { Value } from '../../../kloudformation/Value';

export function parameterObjectProps(parameterObjectPropsProps: ParameterObjectProps): ParameterObjectProps { return (parameterObjectPropsProps) }

export interface ParameterObjectProps {
    attributes: ParameterAttributeProps[];
    id: Value<string>;
}