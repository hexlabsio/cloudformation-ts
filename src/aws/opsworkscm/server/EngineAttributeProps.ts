import { Value } from '../../../kloudformation/Value';

export function engineAttributeProps(engineAttributePropsProps: EngineAttributeProps): EngineAttributeProps { return (engineAttributePropsProps) as unknown as EngineAttributeProps }

export interface EngineAttributeProps {
    value?: Value<string>;
    name?: Value<string>;
}