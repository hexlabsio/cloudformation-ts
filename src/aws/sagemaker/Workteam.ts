import { Value } from '../../kloudformation/Value';
import { NotificationConfigurationProps } from './workteam/NotificationConfigurationProps';
import { MemberDefinitionProps } from './workteam/MemberDefinitionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function workteam(workteamProps: Workteam & { logicalName?: string }): Workteam { return ({ ...workteamProps, _logicalType: 'AWS::SageMaker::Workteam' }) as unknown as Workteam }

export interface Workteam extends KloudResource {
    description?: Value<string>;
    notificationConfiguration?: NotificationConfigurationProps;
    workteamName?: Value<string>;
    memberDefinitions?: MemberDefinitionProps[];
    tags?: Tag[];
}