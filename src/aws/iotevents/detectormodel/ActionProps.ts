import { IotEventsProps } from './IotEventsProps';
import { ResetTimerProps } from './ResetTimerProps';
import { SqsProps } from './SqsProps';
import { FirehoseProps } from './FirehoseProps';
import { SnsProps } from './SnsProps';
import { IotTopicPublishProps } from './IotTopicPublishProps';
import { SetTimerProps } from './SetTimerProps';
import { ClearTimerProps } from './ClearTimerProps';
import { LambdaProps } from './LambdaProps';
import { SetVariableProps } from './SetVariableProps';

export function actionProps(actionPropsProps: ActionProps): ActionProps { return (actionPropsProps) as unknown as ActionProps }

export interface ActionProps {
    iotEvents?: IotEventsProps;
    resetTimer?: ResetTimerProps;
    sqs?: SqsProps;
    firehose?: FirehoseProps;
    sns?: SnsProps;
    iotTopicPublish?: IotTopicPublishProps;
    setTimer?: SetTimerProps;
    clearTimer?: ClearTimerProps;
    lambda?: LambdaProps;
    setVariable?: SetVariableProps;
}