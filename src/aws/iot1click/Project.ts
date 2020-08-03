import { Value } from '../../kloudformation/Value';
import { PlacementTemplateProps } from './project/PlacementTemplateProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ProjectAttributes = { ProjectName: Attribute<string>;Arn: Attribute<string> }
export function project(projectProps: Project): Project & {attributes: ProjectAttributes} { return ({ ...projectProps, _logicalType: 'AWS::IoT1Click::Project', attributes: { ProjectName: 'ProjectName',Arn: 'Arn' } }) }
   
export interface Project extends KloudResource {
  description?: Value<string>
  placementTemplate: PlacementTemplateProps
  projectName?: Value<string>
}