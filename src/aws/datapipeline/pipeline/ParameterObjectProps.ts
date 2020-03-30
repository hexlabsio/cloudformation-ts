import { ParameterAttributeProps } from './ParameterAttributeProps';
import { Value } from '../../../kloudformation/Value';

export function parameterObjectProps(parameterObjectPropsProps: ParameterObjectProps): ParameterObjectProps { return (parameterObjectPropsProps) as unknown as ParameterObjectProps }

export interface ParameterObjectProps {
    attributes: ParameterAttributeProps[];
    id: Value<string>;
}