import { Value } from '../../../kloudformation/Value';

export function xMLClassifierProps(xMLClassifierPropsProps: XMLClassifierProps): XMLClassifierProps { return (xMLClassifierPropsProps) }

export interface XMLClassifierProps {
    rowTag: Value<string>;
    classification: Value<string>;
    name?: Value<string>;
}