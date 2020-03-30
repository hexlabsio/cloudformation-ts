import { Value } from '../../kloudformation/Value';
import { RecordSetProps } from './recordsetgroup/RecordSetProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function recordSetGroup(recordSetGroupProps: RecordSetGroup & { logicalName?: string }): RecordSetGroup { return ({ ...recordSetGroupProps, _logicalType: 'AWS::Route53::RecordSetGroup' }) as unknown as RecordSetGroup }

export interface RecordSetGroup extends KloudResource {
    comment?: Value<string>;
    hostedZoneId?: Value<string>;
    hostedZoneName?: Value<string>;
    recordSets?: RecordSetProps[];
}