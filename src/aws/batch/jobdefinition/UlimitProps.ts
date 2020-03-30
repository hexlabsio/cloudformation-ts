import { Value } from '../../../kloudformation/Value';

export function ulimitProps(ulimitPropsProps: UlimitProps): UlimitProps { return (ulimitPropsProps) as unknown as UlimitProps }

export interface UlimitProps {
    softLimit: Value<number>;
    hardLimit: Value<number>;
    name: Value<string>;
}