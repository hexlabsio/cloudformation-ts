import { BounceActionProps } from './BounceActionProps';
import { S3ActionProps } from './S3ActionProps';
import { StopActionProps } from './StopActionProps';
import { SNSActionProps } from './SNSActionProps';
import { WorkmailActionProps } from './WorkmailActionProps';
import { AddHeaderActionProps } from './AddHeaderActionProps';
import { LambdaActionProps } from './LambdaActionProps';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    bounceAction?: BounceActionProps;
    s3Action?: S3ActionProps;
    stopAction?: StopActionProps;
    sNSAction?: SNSActionProps;
    workmailAction?: WorkmailActionProps;
    addHeaderAction?: AddHeaderActionProps;
    lambdaAction?: LambdaActionProps;
}