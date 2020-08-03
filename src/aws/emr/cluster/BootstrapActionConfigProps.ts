import { Value } from '../../../kloudformation/Value';
import { ScriptBootstrapActionConfigProps } from './ScriptBootstrapActionConfigProps';

export interface BootstrapActionConfigProps {
  name: Value<string>
  scriptBootstrapAction: ScriptBootstrapActionConfigProps
}