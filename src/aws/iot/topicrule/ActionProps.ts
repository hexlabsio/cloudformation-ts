import { CloudwatchAlarmActionProps } from './CloudwatchAlarmActionProps';
import { CloudwatchMetricActionProps } from './CloudwatchMetricActionProps';
import { DynamoDBActionProps } from './DynamoDBActionProps';
import { DynamoDBv2ActionProps } from './DynamoDBv2ActionProps';
import { ElasticsearchActionProps } from './ElasticsearchActionProps';
import { FirehoseActionProps } from './FirehoseActionProps';
import { HttpActionProps } from './HttpActionProps';
import { IotAnalyticsActionProps } from './IotAnalyticsActionProps';
import { IotEventsActionProps } from './IotEventsActionProps';
import { IotSiteWiseActionProps } from './IotSiteWiseActionProps';
import { KinesisActionProps } from './KinesisActionProps';
import { LambdaActionProps } from './LambdaActionProps';
import { RepublishActionProps } from './RepublishActionProps';
import { S3ActionProps } from './S3ActionProps';
import { SnsActionProps } from './SnsActionProps';
import { SqsActionProps } from './SqsActionProps';
import { StepFunctionsActionProps } from './StepFunctionsActionProps';

export interface ActionProps {
  cloudwatchAlarm?: CloudwatchAlarmActionProps
  cloudwatchMetric?: CloudwatchMetricActionProps
  dynamoDB?: DynamoDBActionProps
  dynamoDBv2?: DynamoDBv2ActionProps
  elasticsearch?: ElasticsearchActionProps
  firehose?: FirehoseActionProps
  http?: HttpActionProps
  iotAnalytics?: IotAnalyticsActionProps
  iotEvents?: IotEventsActionProps
  iotSiteWise?: IotSiteWiseActionProps
  kinesis?: KinesisActionProps
  lambda?: LambdaActionProps
  republish?: RepublishActionProps
  s3?: S3ActionProps
  sns?: SnsActionProps
  sqs?: SqsActionProps
  stepFunctions?: StepFunctionsActionProps
}