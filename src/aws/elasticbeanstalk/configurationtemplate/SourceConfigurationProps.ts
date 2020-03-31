import { Value } from '../../../kloudformation/Value';

export function sourceConfigurationProps(sourceConfigurationPropsProps: SourceConfigurationProps): SourceConfigurationProps { return (sourceConfigurationPropsProps) }

export interface SourceConfigurationProps {
    applicationName: Value<string>;
    templateName: Value<string>;
}