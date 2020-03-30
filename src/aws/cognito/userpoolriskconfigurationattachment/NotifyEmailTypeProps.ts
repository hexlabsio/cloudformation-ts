import { Value } from '../../../kloudformation/Value';

export function notifyEmailTypeProps(notifyEmailTypePropsProps: NotifyEmailTypeProps): NotifyEmailTypeProps { return (notifyEmailTypePropsProps) as unknown as NotifyEmailTypeProps }

export interface NotifyEmailTypeProps {
    subject: Value<string>;
    textBody?: Value<string>;
    htmlBody?: Value<string>;
}