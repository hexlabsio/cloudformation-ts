import { Value } from '../../../kloudformation/Value';

export function ulimitProps(ulimitPropsProps: UlimitProps): UlimitProps { return (ulimitPropsProps) as unknown as UlimitProps }

export interface UlimitProps {
    hardLimit: Value<number>;
    name: Value<string>;
    softLimit: Value<number>;
}