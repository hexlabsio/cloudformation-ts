import { Value } from '../../../kloudformation/Value';

export function skewedInfoProps(skewedInfoPropsProps: SkewedInfoProps): SkewedInfoProps { return (skewedInfoPropsProps) as unknown as SkewedInfoProps }

export interface SkewedInfoProps {
    skewedColumnNames?: Value<Value<string>[]>;
    skewedColumnValues?: Value<Value<string>[]>;
    skewedColumnValueLocationMaps?: Value<any>;
}