import { Value } from '../../../kloudformation/Value';

export function jSONMappingParametersProps(jSONMappingParametersPropsProps: JSONMappingParametersProps): JSONMappingParametersProps { return (jSONMappingParametersPropsProps) as unknown as JSONMappingParametersProps }

export interface JSONMappingParametersProps {
    recordRowPath: Value<string>;
}