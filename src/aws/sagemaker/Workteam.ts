import { Value } from '../../kloudformation/Value';
import { NotificationConfigurationProps } from './workteam/NotificationConfigurationProps';
import { MemberDefinitionProps } from './workteam/MemberDefinitionProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type WorkteamAttributes = { WorkteamName: Attribute<string> }
export function workteam(workteamProps: Workteam): Workteam & {attributes: WorkteamAttributes} { return ({ ...workteamProps, _logicalType: 'AWS::SageMaker::Workteam', attributes: { WorkteamName: 'WorkteamName' } }) }
   
export interface Workteam extends KloudResource {
  description?: Value<string>
  notificationConfiguration?: NotificationConfigurationProps
  workteamName?: Value<string>
  memberDefinitions?: MemberDefinitionProps[]
  tags?: Tag[]
}