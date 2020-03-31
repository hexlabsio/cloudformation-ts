import { Value } from '../../../kloudformation/Value';

export function cachingConfigProps(cachingConfigPropsProps: CachingConfigProps): CachingConfigProps { return (cachingConfigPropsProps) }

export interface CachingConfigProps {
    cachingKeys?: Value<Value<string>[]>;
    ttl?: Value<number>;
}