import { Value } from '../../../kloudformation/Value';

export function projectSourceVersionProps(projectSourceVersionPropsProps: ProjectSourceVersionProps): ProjectSourceVersionProps { return (projectSourceVersionPropsProps) as unknown as ProjectSourceVersionProps }

export interface ProjectSourceVersionProps {
    sourceIdentifier: Value<string>;
    sourceVersion?: Value<string>;
}