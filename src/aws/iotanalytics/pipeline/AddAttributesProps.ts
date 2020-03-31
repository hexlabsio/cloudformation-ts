import { Value } from '../../../kloudformation/Value';

export function addAttributesProps(addAttributesPropsProps: AddAttributesProps): AddAttributesProps { return (addAttributesPropsProps) }

export interface AddAttributesProps {
    next?: Value<string>;
    attributes?: Value<any>;
    name?: Value<string>;
}