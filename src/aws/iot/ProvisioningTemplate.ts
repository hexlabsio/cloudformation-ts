import { Value } from '../../kloudformation/Value';
import { ProvisioningHookProps } from './provisioningTemplate/ProvisioningHookProps';
import { TagsProps } from './provisioningTemplate/TagsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ProvisioningTemplateAttributes = { TemplateArn: Attribute<string> }
export function provisioningTemplate(provisioningTemplateProps: ProvisioningTemplate): ProvisioningTemplate & {attributes: ProvisioningTemplateAttributes} { return ({ ...provisioningTemplateProps, _logicalType: 'AWS::IoT::ProvisioningTemplate', attributes: { TemplateArn: 'TemplateArn' } }) }
   
export interface ProvisioningTemplate extends KloudResource {
  templateName?: Value<string>
  description?: Value<string>
  enabled?: Value<boolean>
  provisioningRoleArn: Value<string>
  templateBody: Value<string>
  preProvisioningHook?: ProvisioningHookProps
  tags?: TagsProps
}