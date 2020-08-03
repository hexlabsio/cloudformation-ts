import { Value } from '../../../kloudformation/Value';

export interface SourceAuthProps {
  type: Value<string>
  resource?: Value<string>
}