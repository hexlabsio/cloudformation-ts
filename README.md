[![KloudFormation-ts workflow](https://github.com/hexlabsio/kloudformation-ts/actions/workflows/build.yml/badge.svg)](https://github.com/hexlabsio/kloudformation-ts/actions/workflows/build.yml)
[![NPM Version](https://badge.fury.io/js/%40hexlabs%2Fkloudformation-ts.svg)](https://badge.fury.io/js/%40hexlabs%2Fkloudformation-ts)

# KloudFormation-ts

KloudFormation-ts is a one-to-one mapping of Amazon's CloudFormation generated into a TypeScript library allowing users to write type safe stacks in TypeScript.

KloudFormation can be invoked inside a Typescript program or on command line by running 

```
npm install -g @hexlabs/kloudformation-ts
```

**Benefits Include**

 * Type Safety
 * Code Completion
 * Stacks as Code
 * Modular Templating
 * Coverage generated for all Cloudformation resources with each release

## This is what it looks like

```typescript
Template.create(
  (aws: AWS) => {
    const snsTopic = aws.snsTopic({})
    aws.s3Bucket({
        bucketName: snsTopic.attributes.TopicName
    })
  });
```

This is what it Produces

```JSON
{
  "Parameters": {},
  "Resources": {
    "Topic": {
      "Type": "AWS::SNS::Topic"
    },
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": {
          "Fn::GetAtt": [
            "Topic",
            "TopicName"
          ]
        }
      }
    }
  }
}
```

## Get Started
To install on command line globally use
```
npm install -g @hexlabs/kloudformation-ts
```
### Generate a Template

A Cloudformation template can be generated using
```
kloudformation translate -s klouds-users-dev klouds-keys-dev -- $(pwd)/stack/stack.ts
```
Full list of `kloudformation template` option

```
Options:
  -s, --stack-info <stacks...>  A space separated list of stacks to get outputs as environment variables
  -r, --region <region>         The region to gather stack outputs from (default: "eu-west-1")
  -t, --ts-project <fileName>   TS Config
  -h, --help                    display help for command
```

### Deployment
```
kloudformation deploy --file $(pwd)/dist --bucket deployments-bucket --prefix s3-key-prefix stack-name $(pwd)/stack/stack.ts"
```
This command will zip and upload a files in $(pwd)/dist to `s3://deployments-bucket/s3-key-prefix` then create the stack "stack-name"

Full list of `kloudformation deploy` options

```
Options:
  -r, --region <region>               The region to delete stack from (default: "eu-west-1")
  -e, --endpoint-url <endpoint-url>   
  -c, --capabilities <capability...>  A space separated list of any of CAPABILITY_IAM, CAPABILITY_NAMED_IAM or CAPABILITY_AUTO_EXPAND (default: ["CAPABILITY_NAMED_IAM"])
  -f, --file <files...>               A space separated list of files to upload to s3
  -b, --bucket <bucket>               The s3 bucket in which to upload files
  -p, --prefix <prefix>               The s3 object key prefix in which to upload files
  -s, --stack-info <stacks...>        A space separated list of stacks to get outputs as environment variables
  -o, --output-file <fileName>        A file to output key-value pairs from stack-info
  -t, --ts-project <fileName>         TS Config
  -h, --help                          display help for command
```
