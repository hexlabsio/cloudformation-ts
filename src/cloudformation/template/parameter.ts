import { Value } from '../Value';

export type AWSParameterType = 'AWS::EC2::AvailabilityZone::Name' |
  'AWS::EC2::Image::Id' |
  'AWS::EC2::Instance::Id' |
  'AWS::EC2::KeyPair::KeyName' |
  'AWS::EC2::SecurityGroup::GroupName' |
  'AWS::EC2::SecurityGroup::Id' |
  'AWS::EC2::Subnet::Id' |
  'AWS::EC2::Volume::Id' |
  'AWS::EC2::VPC::Id' |
  'AWS::Route53::HostedZone::Id' |
  'List<AWS::EC2::AvailabilityZone::Name>' |
  'List<AWS::EC2::Image::Id>' |
  'List<AWS::EC2::Instance::Id>' |
  'List<AWS::EC2::SecurityGroup::GroupName>' |
  'List<AWS::EC2::SecurityGroup::Id>' |
  'List<AWS::EC2::Subnet::Id>' |
  'List<AWS::EC2::Volume::Id>' |
  'List<AWS::EC2::VPC::Id>' |
  'List<AWS::Route53::HostedZone::Id>';

export type SSMParameterTypes = 'AWS::SSM::Parameter::Name' |
  'AWS::SSM::Parameter::Value<String>' |
  'AWS::SSM::Parameter::Value<List<String>>' |
  'AWS::SSM::Parameter::Value<CommaDelimitedList>' |
  `AWS::SSM::Parameter::Value<${AWSParameterType}>` |
  `AWS::SSM::Parameter::Value<List<${AWSParameterType}>>`;

export type Parameter = ({
  type: 'String' | 'Number' | 'List<Number>' | 'List<String>' | 'CommaDelimitedList' | AWSParameterType | SSMParameterTypes;
} | {
  type: 'Future';
  environmentName: string;
}) &  {
  default?: string;
  allowedValues?: string[];
  description?: string;
  constraintDescription?: string;
  noEcho?: boolean;
  minLength?: number;
  maxLength?: number;
  maxValue?: number;
  minValue?: number;
}

export type Params<T> = { [K in keyof T]: () => Value<any> }