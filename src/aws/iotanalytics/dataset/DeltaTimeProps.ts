import { Value } from '../../../kloudformation/Value';

export function deltaTimeProps(deltaTimePropsProps: DeltaTimeProps): DeltaTimeProps { return (deltaTimePropsProps) as unknown as DeltaTimeProps }

export interface DeltaTimeProps {
    timeExpression: Value<string>;
    offsetSeconds: Value<number>;
}