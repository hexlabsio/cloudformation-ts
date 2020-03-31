import { Value } from '../../../kloudformation/Value';

export function ulimitProps(ulimitPropsProps: UlimitProps): UlimitProps { return (ulimitPropsProps) }

export interface UlimitProps {
    hardLimit: Value<number>;
    name: Value<string>;
    softLimit: Value<number>;
}