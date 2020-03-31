import { Value } from '../../../kloudformation/Value';

export function removeAttributesProps(removeAttributesPropsProps: RemoveAttributesProps): RemoveAttributesProps { return (removeAttributesPropsProps) }

export interface RemoveAttributesProps {
    next?: Value<string>;
    attributes?: Value<Value<string>[]>;
    name?: Value<string>;
}