import { Value } from '../../../kloudformation/Value';

export function trustedSignersProps(trustedSignersPropsProps: TrustedSignersProps): TrustedSignersProps { return (trustedSignersPropsProps) as unknown as TrustedSignersProps }

export interface TrustedSignersProps {
    enabled: Value<boolean>;
    awsAccountNumbers?: Value<Value<string>[]>;
}