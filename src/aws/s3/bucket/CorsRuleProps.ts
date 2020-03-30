import { Value } from '../../../kloudformation/Value';

export function corsRuleProps(corsRulePropsProps: CorsRuleProps): CorsRuleProps { return (corsRulePropsProps) as unknown as CorsRuleProps }

export interface CorsRuleProps {
    allowedMethods: Value<Value<string>[]>;
    allowedOrigins: Value<Value<string>[]>;
    allowedHeaders?: Value<Value<string>[]>;
    exposedHeaders?: Value<Value<string>[]>;
    id?: Value<string>;
    maxAge?: Value<number>;
}