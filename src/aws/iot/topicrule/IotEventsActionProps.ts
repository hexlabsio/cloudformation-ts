import { Value } from '../../../kloudformation/Value';

export interface IotEventsActionProps {
  inputName: Value<string>
  messageId?: Value<string>
  roleArn: Value<string>
}