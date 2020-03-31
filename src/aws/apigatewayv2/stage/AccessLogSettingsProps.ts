import { Value } from '../../../kloudformation/Value';

export function accessLogSettingsProps(accessLogSettingsPropsProps: AccessLogSettingsProps): AccessLogSettingsProps { return (accessLogSettingsPropsProps) }

export interface AccessLogSettingsProps {
    format?: Value<string>;
    destinationArn?: Value<string>;
}