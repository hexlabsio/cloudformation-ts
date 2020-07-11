import {Role} from "../../aws/iam/Role";
import {Function as LambdaFunction, FunctionAttributes} from "../../aws/lambda/Function";
import {CodeProps} from "../../aws/lambda/function/CodeProps";
import {Permission} from "../../aws/lambda/Permission";
import {LogGroup} from "../../aws/logs/LogGroup";
import {Subscription} from "../../aws/sns/Subscription";
import {AWS} from "../aws";
import {iamPolicy} from "../iam/policyDocument";
import {normalize} from "../kloudformation";
import {Value} from "../Value";

export enum LambdaRuntime {
  NODE_JS_12 = "nodejs12.x",
  NODE_JS_10 = "nodejs10.x",
  PYTHON_3_8 = "python3.8",
  PYTHON_3_7 = "python3.7",
  PYTHON_3_6 = "python3.6",
  PYTHON_2_7 = "python2.7",
  RUBY_2_7 = "ruby2.7",
  RUBY_2_5 = "ruby2.5",
  JAVA_11 = "java11",
  JAVA_8 = "java8",
  GO_1 = "go1.x",
  NET_CORE_3_1 = "dotnetcore3.1",
  NET_CORE_2_1 = "dotnetcore2.1",
  CUSTOM = "provided"
}

export class Lambda {
  private readonly aws: AWS;
  role: Role;
  logGroup: LogGroup;
  lambda: LambdaFunction & { attributes: FunctionAttributes };
  permissions: Permission[];
  subscriptions: Subscription[];
  name: string;
  
  constructor(aws: AWS, name: string, role: Role, logGroup: LogGroup, lambda: LambdaFunction  & { attributes: FunctionAttributes }) {
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
  
  static node(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.NODE_JS_12, extra);
  }
  static python(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.PYTHON_3_8, extra);
  }
  static ruby(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.RUBY_2_7, extra);
  }
  static java(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.JAVA_11, extra);
  }
  static go(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.GO_1, extra);
  }
  static dotNet(aws: AWS, name: string, code: CodeProps, handler: Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    return Lambda.create(aws, name, code, handler, LambdaRuntime.NET_CORE_3_1, extra);
  }
  
  static create(aws: AWS, name: string, code: CodeProps, handler: Value<string>, runtime: LambdaRuntime | Value<string>, extra?: Partial<LambdaFunction>): Lambda {
    const normalName = normalize(name);
    const logGroup = aws.logsLogGroup({
      _logicalName: `${normalName}LogGroup`,
      logGroupName: `aws/lambda/${name}`
    });
    const role = aws.iamRole({
      _logicalName: `${normalName}Role`,
      assumeRolePolicyDocument: iamPolicy({statement: [{action: 'sts:AssumeRole', effect: 'Allow', principal: { Service: ['lambda.amazonaws.com'] }}]})
    });
    const lambda = aws.lambdaFunction({ _logicalName: `${normalName}Function`, ...extra, code, handler, role, runtime, functionName: name });
    return new Lambda(aws, normalName, role, logGroup, lambda);
  }
}
