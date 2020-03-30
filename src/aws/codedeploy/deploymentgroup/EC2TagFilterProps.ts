import { Value } from '../../../kloudformation/Value';

export function eC2TagFilterProps(eC2TagFilterPropsProps: EC2TagFilterProps): EC2TagFilterProps { return (eC2TagFilterPropsProps) as unknown as EC2TagFilterProps }

export interface EC2TagFilterProps {
    key?: Value<string>;
    type?: Value<string>;
    value?: Value<string>;
}