import { Value } from '../../../kloudformation/Value';
import { PolicyDocument } from '../../../kloudformation/iam/PolicyDocument';

export interface PolicyProps {
  policyDocument: Value<PolicyDocument>
  policyName: Value<string>
}