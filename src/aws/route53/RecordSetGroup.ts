import { Value } from '../../kloudformation/Value';
import { RecordSetProps } from './recordsetgroup/RecordSetProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RecordSetGroupAttributes = {  }
export function recordSetGroup(recordSetGroupProps: RecordSetGroup): RecordSetGroup & { attributes: RecordSetGroupAttributes } { return ({ ...recordSetGroupProps, _logicalType: 'AWS::Route53::RecordSetGroup', attributes: {  } }) }

export interface RecordSetGroup extends KloudResource {
    comment?: Value<string>;
    hostedZoneId?: Value<string>;
    hostedZoneName?: Value<string>;
    recordSets?: RecordSetProps[];
}