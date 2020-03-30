import { Value } from '../../../kloudformation/Value';

export function deltaSyncConfigProps(deltaSyncConfigPropsProps: DeltaSyncConfigProps): DeltaSyncConfigProps { return (deltaSyncConfigPropsProps) as unknown as DeltaSyncConfigProps }

export interface DeltaSyncConfigProps {
    baseTableTTL: Value<string>;
    deltaSyncTableTTL: Value<string>;
    deltaSyncTableName: Value<string>;
}