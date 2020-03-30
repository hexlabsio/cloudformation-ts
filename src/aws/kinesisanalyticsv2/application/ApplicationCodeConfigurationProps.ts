import { Value } from '../../../kloudformation/Value';
import { CodeContentProps } from './CodeContentProps';

export function applicationCodeConfigurationProps(applicationCodeConfigurationPropsProps: ApplicationCodeConfigurationProps): ApplicationCodeConfigurationProps { return (applicationCodeConfigurationPropsProps) as unknown as ApplicationCodeConfigurationProps }

export interface ApplicationCodeConfigurationProps {
    codeContentType: Value<string>;
    codeContent: CodeContentProps;
}