import { Value } from '../../kloudformation/Value';
import { DataflowEdgeProps } from './missionprofile/DataflowEdgeProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function missionProfile(missionProfileProps: MissionProfile & { logicalName?: string }): MissionProfile { return ({ ...missionProfileProps, _logicalType: 'AWS::GroundStation::MissionProfile' }) as unknown as MissionProfile }

export interface MissionProfile extends KloudResource {
    name: Value<string>;
    minimumViableContactDurationSeconds: Value<number>;
    dataflowEdges: DataflowEdgeProps[];
    trackingConfigArn: Value<string>;
    contactPrePassDurationSeconds?: Value<number>;
    contactPostPassDurationSeconds?: Value<number>;
    tags?: Tag[];
}