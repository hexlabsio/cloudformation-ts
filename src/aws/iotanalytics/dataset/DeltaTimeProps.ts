import { Value } from '../../../kloudformation/Value';

export function deltaTimeProps(deltaTimePropsProps: DeltaTimeProps): DeltaTimeProps { return (deltaTimePropsProps) }

export interface DeltaTimeProps {
    timeExpression: Value<string>;
    offsetSeconds: Value<number>;
}