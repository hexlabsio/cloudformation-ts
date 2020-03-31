import { Value } from '../../../kloudformation/Value';

export function renderingEngineProps(renderingEnginePropsProps: RenderingEngineProps): RenderingEngineProps { return (renderingEnginePropsProps) }

export interface RenderingEngineProps {
    version: Value<string>;
    name: Value<string>;
}