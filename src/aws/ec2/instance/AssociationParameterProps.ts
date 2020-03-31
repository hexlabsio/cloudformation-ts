import { Value } from '../../../kloudformation/Value';

export function associationParameterProps(associationParameterPropsProps: AssociationParameterProps): AssociationParameterProps { return (associationParameterPropsProps) }

export interface AssociationParameterProps {
    key: Value<string>;
    value: Value<Value<string>[]>;
}