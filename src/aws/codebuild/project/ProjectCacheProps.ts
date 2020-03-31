import { Value } from '../../../kloudformation/Value';

export function projectCacheProps(projectCachePropsProps: ProjectCacheProps): ProjectCacheProps { return (projectCachePropsProps) }

export interface ProjectCacheProps {
    type: Value<string>;
    modes?: Value<Value<string>[]>;
    location?: Value<string>;
}