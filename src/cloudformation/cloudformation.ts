export * from './iam/iamActions';
export * from './iam/PolicyDocument';

export * from './modules/api';
export * from './modules/cron';
export * from './modules/custom-resource';
export * from './modules/dynamo';
export * from './modules/lambda';
export * from './modules/website';

export * from './Attribute';
export * from './aws';
export * from './aws-resources';
export * from './resources/AwsResource';
export * from './Value';
export * from './template/template-creator';
export * from './template/outputs';
export * from './template/cloudformation-template';
export * from './template/parameter';

export function normalize(name: string) {
  return name.split(/[^a-zA-Z0-9]/g).reduce((prev, current) => `${prev}${current.substring(0,1).toUpperCase()}${current.substring(1)}`, '');
}

export function fromEnv<S>(environmentName: S): {type: 'Future'; environmentName: S} {
  return {type: 'Future', environmentName};
}
