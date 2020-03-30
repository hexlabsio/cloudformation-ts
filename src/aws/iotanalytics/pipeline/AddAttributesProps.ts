import { Value } from '../../../kloudformation/Value';

export function addAttributesProps(addAttributesPropsProps: AddAttributesProps): AddAttributesProps { return (addAttributesPropsProps) as unknown as AddAttributesProps }

export interface AddAttributesProps {
    next?: Value<string>;
    attributes?: Value<any>;
    name?: Value<string>;
}