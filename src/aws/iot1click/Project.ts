import { PlacementTemplateProps } from './project/PlacementTemplateProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ProjectAttributes = { ProjectName: Attribute<string>; Arn: Attribute<string> }
export function project(projectProps: Project): Project & { attributes: ProjectAttributes } { return ({ ...projectProps, _logicalType: 'AWS::IoT1Click::Project', attributes: { ProjectName: 'ProjectName', Arn: 'Arn' } }) }

export interface Project extends KloudResource {
    placementTemplate: PlacementTemplateProps;
    description?: Value<string>;
    projectName?: Value<string>;
}