import {Role} from "../../aws/iam/Role";
import {Value} from "../Value";
import {Action} from "./iamActions";
export type Principal = '*' | { AWS: Value<string>[] } | { Federated: Value<string>[] } | { Service: Value<string>[] }
export interface PolicyDocument {
  id?: string;
  version?: '2008-10-17' | '2012-10-17' | string;
  statement: PolicyStatement[];
}

export interface PolicyStatement {
  action?: Value<string> | Value<string[]>| Value<string>[] | Action | Action[];
  notAction?: Value<string> | Value<string[]>| Value<string>[] | Action | Action[];
  effect: 'Allow' | 'Deny';
  resource?: Value<string> | Value<string[]> | Value<string>[];
  notResource?: Value<string> | Value<string[]>| Value<string>[];
  sid?: Value<string>;
  principal?: Principal;
  notPrincipal?: Principal;
  condition?: any;
}

export function iamPolicy(policyDocument: PolicyDocument): PolicyDocument { return policyDocument }

export class Policy {
  private constructor(readonly document: PolicyDocument = {statement: [], version: "2012-10-17"}) { }
  
  grant(action: Action, effect: PolicyStatement['effect'], onResource: PolicyStatement['resource']): this {
    this.document.statement = [
      ...(this.document.statement ?? []),
      {  action, effect, resource: onResource }
    ]
    return this;
  }
  
  allow(action: Action, onResource: PolicyStatement['resource']): this {
    return this.grant(action, 'Allow', onResource)
  }
  
  deny(action: Action, onResource: PolicyStatement['resource']): this {
    return this.grant(action, 'Deny', onResource)
  }
  
  static allow(action: Action, onResource: PolicyStatement['resource']): Policy {
    return new Policy().allow(action, onResource);
  }
  
  static deny(action: Action, onResource: PolicyStatement['resource']): Policy {
    return new Policy().deny(action, onResource);
  }
}

export class Iam {
  private constructor(private role: Role) { }
  
  add(policyName: string, policy: Policy): this {
    this.role.policies = [
      ...(this.role.policies ?? []),
      {policyName, policyDocument: policy.document}
    ]
    return this;
  }
  
  static from(role: Role) {
    return new Iam(role);
  }
}
