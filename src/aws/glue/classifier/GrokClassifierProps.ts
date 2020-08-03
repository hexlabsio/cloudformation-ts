import { Value } from '../../../kloudformation/Value';

export interface GrokClassifierProps {
  customPatterns?: Value<string>
  grokPattern: Value<string>
  classification: Value<string>
  name?: Value<string>
}