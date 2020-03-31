import { Value } from '../../../kloudformation/Value';

export function corsRuleProps(corsRulePropsProps: CorsRuleProps): CorsRuleProps { return (corsRulePropsProps) }

export interface CorsRuleProps {
    allowedMethods?: Value<Value<string>[]>;
    allowedOrigins?: Value<Value<string>[]>;
    exposeHeaders?: Value<Value<string>[]>;
    maxAgeSeconds?: Value<number>;
    allowedHeaders?: Value<Value<string>[]>;
}