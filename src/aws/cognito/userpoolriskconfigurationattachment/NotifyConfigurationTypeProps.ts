import { NotifyEmailTypeProps } from './NotifyEmailTypeProps';
import { Value } from '../../../kloudformation/Value';

export interface NotifyConfigurationTypeProps {
  blockEmail?: NotifyEmailTypeProps
  replyTo?: Value<string>
  sourceArn: Value<string>
  noActionEmail?: NotifyEmailTypeProps
  from?: Value<string>
  mfaEmail?: NotifyEmailTypeProps
}