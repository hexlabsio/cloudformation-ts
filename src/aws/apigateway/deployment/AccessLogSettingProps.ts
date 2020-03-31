import { Value } from '../../../kloudformation/Value';

export function accessLogSettingProps(accessLogSettingPropsProps: AccessLogSettingProps): AccessLogSettingProps { return (accessLogSettingPropsProps) }

export interface AccessLogSettingProps {
    destinationArn?: Value<string>;
    format?: Value<string>;
}