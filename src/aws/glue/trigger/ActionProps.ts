import { NotificationPropertyProps } from './NotificationPropertyProps';
import { Value } from '../../../kloudformation/Value';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    notificationProperty?: NotificationPropertyProps;
    crawlerName?: Value<string>;
    timeout?: Value<number>;
    jobName?: Value<string>;
    arguments?: Value<any>;
    securityConfiguration?: Value<string>;
}