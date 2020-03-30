import { Value } from '../../../kloudformation/Value';

export function renderingEngineProps(renderingEnginePropsProps: RenderingEngineProps): RenderingEngineProps { return (renderingEnginePropsProps) as unknown as RenderingEngineProps }

export interface RenderingEngineProps {
    version: Value<string>;
    name: Value<string>;
}