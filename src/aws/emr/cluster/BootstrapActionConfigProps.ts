import { Value } from '../../../kloudformation/Value';
import { ScriptBootstrapActionConfigProps } from './ScriptBootstrapActionConfigProps';

export function bootstrapActionConfigProps(bootstrapActionConfigPropsProps: BootstrapActionConfigProps): BootstrapActionConfigProps { return (bootstrapActionConfigPropsProps) as unknown as BootstrapActionConfigProps }

export interface BootstrapActionConfigProps {
    name: Value<string>;
    scriptBootstrapAction: ScriptBootstrapActionConfigProps;
}