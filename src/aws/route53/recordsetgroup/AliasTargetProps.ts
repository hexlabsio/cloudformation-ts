import { Value } from '../../../kloudformation/Value';

export function aliasTargetProps(aliasTargetPropsProps: AliasTargetProps): AliasTargetProps { return (aliasTargetPropsProps) as unknown as AliasTargetProps }

export interface AliasTargetProps {
    dNSName: Value<string>;
    hostedZoneId: Value<string>;
    evaluateTargetHealth?: Value<boolean>;
}