import { Value } from '../../../kloudformation/Value';

export function accessLogSettingsProps(accessLogSettingsPropsProps: AccessLogSettingsProps): AccessLogSettingsProps { return (accessLogSettingsPropsProps) as unknown as AccessLogSettingsProps }

export interface AccessLogSettingsProps {
    format?: Value<string>;
    destinationArn?: Value<string>;
}