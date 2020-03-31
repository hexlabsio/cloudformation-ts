import { Value } from '../../../kloudformation/Value';

export function recencyProps(recencyPropsProps: RecencyProps): RecencyProps { return (recencyPropsProps) }

export interface RecencyProps {
    duration: Value<string>;
    recencyType: Value<string>;
}