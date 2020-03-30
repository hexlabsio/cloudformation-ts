import { Value } from '../../../kloudformation/Value';

export function pathPatternConfigProps(pathPatternConfigPropsProps: PathPatternConfigProps): PathPatternConfigProps { return (pathPatternConfigPropsProps) as unknown as PathPatternConfigProps }

export interface PathPatternConfigProps {
    values?: Value<Value<string>[]>;
}