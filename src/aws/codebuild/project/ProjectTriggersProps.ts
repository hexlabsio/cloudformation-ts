import { Value } from '../../../kloudformation/Value';

export function projectTriggersProps(projectTriggersPropsProps: ProjectTriggersProps): ProjectTriggersProps { return (projectTriggersPropsProps) as unknown as ProjectTriggersProps }

export interface ProjectTriggersProps {
    filterGroups?: io.kloudformation.property.aws.codebuild.project.WebhookFilter[][];
    webhook?: Value<boolean>;
}