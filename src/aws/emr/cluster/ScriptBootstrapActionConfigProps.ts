import { Value } from '../../../kloudformation/Value';

export function scriptBootstrapActionConfigProps(scriptBootstrapActionConfigPropsProps: ScriptBootstrapActionConfigProps): ScriptBootstrapActionConfigProps { return (scriptBootstrapActionConfigPropsProps) as unknown as ScriptBootstrapActionConfigProps }

export interface ScriptBootstrapActionConfigProps {
    path: Value<string>;
    args?: Value<Value<string>[]>;
}