import { S3TargetProps } from './S3TargetProps';
import { CatalogTargetProps } from './CatalogTargetProps';
import { JdbcTargetProps } from './JdbcTargetProps';
import { DynamoDBTargetProps } from './DynamoDBTargetProps';

export interface TargetsProps {
  s3Targets?: S3TargetProps[]
  catalogTargets?: CatalogTargetProps[]
  jdbcTargets?: JdbcTargetProps[]
  dynamoDBTargets?: DynamoDBTargetProps[]
}