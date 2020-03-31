import { Value } from '../../../kloudformation/Value';

export function ulimitProps(ulimitPropsProps: UlimitProps): UlimitProps { return (ulimitPropsProps) }

export interface UlimitProps {
    softLimit: Value<number>;
    hardLimit: Value<number>;
    name: Value<string>;
}