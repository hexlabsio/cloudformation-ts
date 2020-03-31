import { Value } from '../../../kloudformation/Value';

export function resourceServerScopeTypeProps(resourceServerScopeTypePropsProps: ResourceServerScopeTypeProps): ResourceServerScopeTypeProps { return (resourceServerScopeTypePropsProps) }

export interface ResourceServerScopeTypeProps {
    scopeName: Value<string>;
    scopeDescription: Value<string>;
}