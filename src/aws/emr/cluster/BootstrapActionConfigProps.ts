import { Value } from '../../../kloudformation/Value';
import { ScriptBootstrapActionConfigProps } from './ScriptBootstrapActionConfigProps';

export function bootstrapActionConfigProps(bootstrapActionConfigPropsProps: BootstrapActionConfigProps): BootstrapActionConfigProps { return (bootstrapActionConfigPropsProps) }

export interface BootstrapActionConfigProps {
    name: Value<string>;
    scriptBootstrapAction: ScriptBootstrapActionConfigProps;
}