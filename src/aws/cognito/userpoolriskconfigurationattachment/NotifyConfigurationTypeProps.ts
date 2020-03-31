import { Value } from '../../../kloudformation/Value';
import { NotifyEmailTypeProps } from './NotifyEmailTypeProps';

export function notifyConfigurationTypeProps(notifyConfigurationTypePropsProps: NotifyConfigurationTypeProps): NotifyConfigurationTypeProps { return (notifyConfigurationTypePropsProps) }

export interface NotifyConfigurationTypeProps {
    sourceArn: Value<string>;
    blockEmail?: NotifyEmailTypeProps;
    replyTo?: Value<string>;
    noActionEmail?: NotifyEmailTypeProps;
    from?: Value<string>;
    mfaEmail?: NotifyEmailTypeProps;
}