import { Value } from '../../../kloudformation/Value';

export function sourceConfigurationProps(sourceConfigurationPropsProps: SourceConfigurationProps): SourceConfigurationProps { return (sourceConfigurationPropsProps) as unknown as SourceConfigurationProps }

export interface SourceConfigurationProps {
    applicationName: Value<string>;
    templateName: Value<string>;
}