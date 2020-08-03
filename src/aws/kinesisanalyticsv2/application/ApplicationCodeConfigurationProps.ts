import { Value } from '../../../kloudformation/Value';
import { CodeContentProps } from './CodeContentProps';

export interface ApplicationCodeConfigurationProps {
  codeContentType: Value<string>
  codeContent: CodeContentProps
}