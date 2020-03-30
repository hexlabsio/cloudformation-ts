import { Value } from '../../../kloudformation/Value';

export function projectCacheProps(projectCachePropsProps: ProjectCacheProps): ProjectCacheProps { return (projectCachePropsProps) as unknown as ProjectCacheProps }

export interface ProjectCacheProps {
    type: Value<string>;
    modes?: Value<Value<string>[]>;
    location?: Value<string>;
}