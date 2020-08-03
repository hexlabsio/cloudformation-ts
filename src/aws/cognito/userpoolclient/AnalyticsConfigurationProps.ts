import { Value } from '../../../kloudformation/Value';

export interface AnalyticsConfigurationProps {
  userDataShared?: Value<boolean>
  externalId?: Value<string>
  applicationId?: Value<string>
  roleArn?: Value<string>
}