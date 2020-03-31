import { Value } from '../../kloudformation/Value';
import { DataflowEdgeProps } from './missionprofile/DataflowEdgeProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type MissionProfileAttributes = { Id: Attribute<string>; Arn: Attribute<string>; Region: Attribute<string> }
export function missionProfile(missionProfileProps: MissionProfile): MissionProfile & { attributes: MissionProfileAttributes } { return ({ ...missionProfileProps, _logicalType: 'AWS::GroundStation::MissionProfile', attributes: { Id: 'Id', Arn: 'Arn', Region: 'Region' } }) }

export interface MissionProfile extends KloudResource {
    name: Value<string>;
    minimumViableContactDurationSeconds: Value<number>;
    dataflowEdges: DataflowEdgeProps[];
    trackingConfigArn: Value<string>;
    contactPrePassDurationSeconds?: Value<number>;
    contactPostPassDurationSeconds?: Value<number>;
    tags?: Tag[];
}