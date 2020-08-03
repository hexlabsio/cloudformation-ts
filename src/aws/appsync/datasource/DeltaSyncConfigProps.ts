import { Value } from '../../../kloudformation/Value';

export interface DeltaSyncConfigProps {
  baseTableTTL: Value<string>
  deltaSyncTableTTL: Value<string>
  deltaSyncTableName: Value<string>
}