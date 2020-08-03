import { Value } from '../../kloudformation/Value';
import { DataflowEdgeProps } from './missionProfile/DataflowEdgeProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type MissionProfileAttributes = { Id: Attribute<string>;Arn: Attribute<string>;Region: Attribute<string> }
export function missionProfile(missionProfileProps: MissionProfile): MissionProfile & {attributes: MissionProfileAttributes} { return ({ ...missionProfileProps, _logicalType: 'AWS::GroundStation::MissionProfile', attributes: { Id: 'Id',Arn: 'Arn',Region: 'Region' } }) }
   
export interface MissionProfile extends KloudResource {
  name: Value<string>
  contactPrePassDurationSeconds?: Value<number>
  contactPostPassDurationSeconds?: Value<number>
  minimumViableContactDurationSeconds: Value<number>
  dataflowEdges: DataflowEdgeProps[]
  trackingConfigArn: Value<string>
  tags?: Tag[]
}