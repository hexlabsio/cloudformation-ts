import { Value } from '../../kloudformation/Value';
import { RecordSetProps } from './recordSetGroup/RecordSetProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function recordSetGroup(recordSetGroupProps: RecordSetGroup): RecordSetGroup { return ({ ...recordSetGroupProps, _logicalType: '' }) }
  
export interface RecordSetGroup extends KloudResource {
  comment?: Value<string>
  hostedZoneId?: Value<string>
  hostedZoneName?: Value<string>
  recordSets?: RecordSetProps[]
}