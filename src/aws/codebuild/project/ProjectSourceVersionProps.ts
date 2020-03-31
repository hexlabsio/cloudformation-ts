import { Value } from '../../../kloudformation/Value';

export function projectSourceVersionProps(projectSourceVersionPropsProps: ProjectSourceVersionProps): ProjectSourceVersionProps { return (projectSourceVersionPropsProps) }

export interface ProjectSourceVersionProps {
    sourceIdentifier: Value<string>;
    sourceVersion?: Value<string>;
}