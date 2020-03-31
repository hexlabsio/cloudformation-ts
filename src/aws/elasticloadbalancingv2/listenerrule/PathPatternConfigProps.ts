import { Value } from '../../../kloudformation/Value';

export function pathPatternConfigProps(pathPatternConfigPropsProps: PathPatternConfigProps): PathPatternConfigProps { return (pathPatternConfigPropsProps) }

export interface PathPatternConfigProps {
    values?: Value<Value<string>[]>;
}