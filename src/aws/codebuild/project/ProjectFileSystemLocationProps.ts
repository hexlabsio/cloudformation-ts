import { Value } from '../../../kloudformation/Value';

export function projectFileSystemLocationProps(projectFileSystemLocationPropsProps: ProjectFileSystemLocationProps): ProjectFileSystemLocationProps { return (projectFileSystemLocationPropsProps) }

export interface ProjectFileSystemLocationProps {
    mountPoint: Value<string>;
    type: Value<string>;
    identifier: Value<string>;
    location: Value<string>;
    mountOptions?: Value<string>;
}