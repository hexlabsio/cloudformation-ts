import { Value } from '../../../kloudformation/Value';

export interface RedirectAllRequestsToProps {
  hostName: Value<string>
  protocol?: Value<string>
}