import { Value } from '../../../kloudformation/Value';

export function quietTimeProps(quietTimePropsProps: QuietTimeProps): QuietTimeProps { return (quietTimePropsProps) }

export interface QuietTimeProps {
    start: Value<string>;
    end: Value<string>;
}