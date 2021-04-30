import {Role} from "../../aws/iam/Role";
import {Function as LambdaFunction} from "../../aws/lambda/Function";
import {CodeProps} from "../../aws/lambda/function/CodeProps";
import {Permission} from "../../aws/lambda/Permission";
import {LogGroup} from "../../aws/logs/LogGroup";
import {Subscription} from "../../aws/sns/Subscription";
import {AWS} from "../aws";
import {iamPolicy} from "../iam/PolicyDocument";
import {normalize} from "../kloudformation";
import {join, Value} from "../Value";

export class Lambda {
  private readonly aws: AWS;
  role: Role;
  logGroup: LogGroup;
  lambda: LambdaFunction;
  permissions: Permission[];
  subscriptions: Subscription[];
  name: string;
  
  constructor(aws: AWS, name: string, role: Role, logGroup: LogGroup, lambda: LambdaFunction) {
    this.aws = aws;
    this.name = name;
    this.role = role;
    this.logGroup = logGroup;
    this.lambda = lambda;
    this.permissions = [];
    this.subscriptions = [];
  }
  
  grantInvoke(toArn: Value<string>, sourceAccount?: Value<string>): Lambda{
    this.permissions.push(Lambda.grantInvoke(this.aws, this.lambda.functionName!, toArn, sourceAccount));
    return this;
  }
  
  static grantInvoke(aws: AWS, lambdaName: Value<string>,  toArn: Value<string>, sourceAccount?: Value<string>): Permission {
    return aws.lambdaPermission({
      action: 'lambda:InvokeFunction',
      functionName: lambdaName,
      principal: 'sns.amazonaws.com',
      sourceArn: toArn,
      sourceAccount
    });
  }
  
  snsTrigger(topicArn: Value<string>, sourceAccount?: Value<string>): Lambda {
    const [permission, subscription] = Lambda.snsTrigger(this.aws, this.lambda.attributes.Arn, this.lambda.functionName!, topicArn, sourceAccount);
    permission._logicalName = `${this.name}Permission` + (this.permissions.length + 1);
    subscription._logicalName = `${this.name}Subscription` + (this.permissions.length + 1);
    this.permissions.push(permission);
    this.subscriptions.push(subscription);
    return this;
  }
  
  static snsTrigger(aws: AWS, lambdaArn: Value<string>, lambdaName: Value<string>, topicArn: Value<string>, sourceAccount?: Value<string>): [Permission, Subscription] {
    const permission = Lambda.grantInvoke(aws, lambdaName, topicArn, sourceAccount);
    const subscription = aws.snsSubscription({
      protocol: 'lambda',
      topicArn: topicArn,
      endpoint: lambdaArn
    });
    return [permission, subscription];
  }
  
  static create(aws: AWS, name: string, code: CodeProps, handler: Value<string>, runtime: LambdaFunction['runtime'], extra?: Partial<LambdaFunction>): Lambda {
    const normalName = normalize(name);
    const role = aws.iamRole({
      _logicalName: `${normalName}Role`,
      assumeRolePolicyDocument: iamPolicy({statement: [{action: 'sts:AssumeRole', effect: 'Allow', principal: { Service: ['lambda.amazonaws.com'] }}]})
    });
    const lambda = aws.lambdaFunction({ _logicalName: `${normalName}Function`, ...extra, code, handler, role: role.attributes.Arn, runtime, functionName: name });
    const logGroup = aws.logsLogGroup({
      _logicalName: `${normalName}LogGroup`,
      logGroupName: join('aws/lambda/', lambda)
    });
    return new Lambda(aws, normalName, role, logGroup, lambda);
  }
}
