import { Value } from '../../../kloudformation/Value';

export function defaultRetentionProps(defaultRetentionPropsProps: DefaultRetentionProps): DefaultRetentionProps { return (defaultRetentionPropsProps) }

export interface DefaultRetentionProps {
    days?: Value<number>;
    mode?: Value<string>;
    years?: Value<number>;
}