import { Value } from '../../../kloudformation/Value';

export function projectionProps(projectionPropsProps: ProjectionProps): ProjectionProps { return (projectionPropsProps) as unknown as ProjectionProps }

export interface ProjectionProps {
    nonKeyAttributes?: Value<Value<string>[]>;
    projectionType?: Value<string>;
}