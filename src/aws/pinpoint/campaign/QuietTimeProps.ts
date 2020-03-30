import { Value } from '../../../kloudformation/Value';

export function quietTimeProps(quietTimePropsProps: QuietTimeProps): QuietTimeProps { return (quietTimePropsProps) as unknown as QuietTimeProps }

export interface QuietTimeProps {
    start: Value<string>;
    end: Value<string>;
}