import { Value } from '../../../kloudformation/Value';

export function deltaSyncConfigProps(deltaSyncConfigPropsProps: DeltaSyncConfigProps): DeltaSyncConfigProps { return (deltaSyncConfigPropsProps) }

export interface DeltaSyncConfigProps {
    baseTableTTL: Value<string>;
    deltaSyncTableTTL: Value<string>;
    deltaSyncTableName: Value<string>;
}