import { Value } from '../../../kloudformation/Value';

export function deviceTemplateProps(deviceTemplatePropsProps: DeviceTemplateProps): DeviceTemplateProps { return (deviceTemplatePropsProps) as unknown as DeviceTemplateProps }

export interface DeviceTemplateProps {
    deviceType?: Value<string>;
    callbackOverrides?: Value<any>;
}