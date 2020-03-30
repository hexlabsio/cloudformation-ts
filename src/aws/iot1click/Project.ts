import { PlacementTemplateProps } from './project/PlacementTemplateProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function project(projectProps: Project & { logicalName?: string }): Project { return ({ ...projectProps, _logicalType: 'AWS::IoT1Click::Project' }) as unknown as Project }

export interface Project extends KloudResource {
    placementTemplate: PlacementTemplateProps;
    description?: Value<string>;
    projectName?: Value<string>;
}