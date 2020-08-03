import { IotEventsProps } from './IotEventsProps';
import { FirehoseProps } from './FirehoseProps';
import { IotTopicPublishProps } from './IotTopicPublishProps';
import { DynamoDBProps } from './DynamoDBProps';
import { DynamoDBv2Props } from './DynamoDBv2Props';
import { IotSiteWiseProps } from './IotSiteWiseProps';
import { ResetTimerProps } from './ResetTimerProps';
import { SqsProps } from './SqsProps';
import { SnsProps } from './SnsProps';
import { SetTimerProps } from './SetTimerProps';
import { ClearTimerProps } from './ClearTimerProps';
import { LambdaProps } from './LambdaProps';
import { SetVariableProps } from './SetVariableProps';

export interface ActionProps {
  iotEvents?: IotEventsProps
  firehose?: FirehoseProps
  iotTopicPublish?: IotTopicPublishProps
  dynamoDB?: DynamoDBProps
  dynamoDBv2?: DynamoDBv2Props
  iotSiteWise?: IotSiteWiseProps
  resetTimer?: ResetTimerProps
  sqs?: SqsProps
  sns?: SnsProps
  setTimer?: SetTimerProps
  clearTimer?: ClearTimerProps
  lambda?: LambdaProps
  setVariable?: SetVariableProps
}