import { Value } from '../../../kloudformation/Value';

export function scriptBootstrapActionConfigProps(scriptBootstrapActionConfigPropsProps: ScriptBootstrapActionConfigProps): ScriptBootstrapActionConfigProps { return (scriptBootstrapActionConfigPropsProps) }

export interface ScriptBootstrapActionConfigProps {
    path: Value<string>;
    args?: Value<Value<string>[]>;
}