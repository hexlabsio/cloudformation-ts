import { Value } from '../../../kloudformation/Value';

export function recencyProps(recencyPropsProps: RecencyProps): RecencyProps { return (recencyPropsProps) as unknown as RecencyProps }

export interface RecencyProps {
    duration: Value<string>;
    recencyType: Value<string>;
}