import { Value } from '../../../kloudformation/Value';

export function fieldToMatchProps(fieldToMatchPropsProps: FieldToMatchProps): FieldToMatchProps { return (fieldToMatchPropsProps) }

export interface FieldToMatchProps {
    singleHeader?: Value<any>;
    singleQueryArgument?: Value<any>;
    allQueryArguments?: Value<any>;
    uriPath?: Value<any>;
    queryString?: Value<any>;
    body?: Value<any>;
    method?: Value<any>;
}