[![CcloudFormation-ts workflow](https://github.com/hexlabsio/cloudformation-ts/actions/workflows/build.yml/badge.svg)](https://github.com/hexlabsio/cloudformation-ts/actions/workflows/build.yml)
[![NPM Version](https://badge.fury.io/js/%40hexlabs%2Fcloudformation-ts.svg)](https://badge.fury.io/js/%40hexlabs%2Fcloudformation-ts)

# HexLabs CloudFormation.ts

CloudFormation-ts is a one-to-one mapping of Amazon's CloudFormation generated into a TypeScript library allowing users to write type safe stacks in TypeScript.

CloudFormation can be invoked inside a Typescript program or on command line by running 

```
npm install -g @hexlabs/cloudformation-ts
```

**Benefits Include**

 * Type Safety
 * Code Completion
 * Stacks as Code
 * Modular Templating
 * Coverage generated for all Cloudformation resources with each release

## This is what it looks like

```typescript
const template = await AwsLoader.register('s3', 'sns').load();

export default template.create().build(aws => {
  const snsTopic = aws.sns.topic();
  const bucket = aws.s3.bucket({
    bucketName: snsTopic.attributes.TopicName
  });
})
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
npm install -g @hexlabs/cloudformation-ts
```

Full list of commands
```
try running: npx @hexlabs/cloudformation-ts
```

```
translate [options] <templateLocation>
deploy [options] <stackName> <templateLocation> [fileLocation]
delete [options] <stackName>
help [command]                                   
```

### Translate

Translate a template written in TypeScript into a JSON CloudFormation template.

This step is optional, the deploy step will also accept a .ts file or .json file.

```
translate [options] <templateLocation>

Options:
  -r, --region <region>         The region to gather stack outputs from (default: "eu-west-1")
  -t, --ts-project <fileName>   TS Config
  -h, --help                    display help for command
```

### Deploy

Deploy a template to AWS. templateLocation can be a .ts or .json file. If .json then jsonFileLocation is not required.

```
Usage: cloudformation-ts deploy [options] <stackName> <templateLocation> [jsonFileLocation]

Options:
  -r, --region <region>               The region to delete stack from (default: "eu-west-1")
  -e, --endpoint-url <endpoint-url>
  -c, --capabilities <capability...>  A space separated list of any of CAPABILITY_IAM, CAPABILITY_NAMED_IAM or CAPABILITY_AUTO_EXPAND (default: ["CAPABILITY_NAMED_IAM"])
  -f, --file <files...>               A space separated list of files to upload to s3 (the first location will be injected as CodeBucket, CodeLocation parameters for use in lambda),
  -b, --bucket <bucket>               The s3 bucket in which to upload files
  -x, --bucket-region <region>        The s3 bucket region in which to upload files
  -p, --prefix <prefix>               The s3 object key prefix in which to upload files
  --stack-upload                      Set if stack should be uploaded and referenced in s3 (Use for large stacks)
  -s, --stack-info <stacks...>        A space separated list of stacks to get outputs as environment variables
  -o, --output-file <fileName>        A file to output key-value pairs from stack-info
  -t, --ts-project <fileName>         TS Config
  -v, --parameters <parametersFile>   The location of the parameters file (default: "parameters.json")
  -h, --help                          display help for command
```



#### Getting outputs from other CloudFormation Stacks

When building infrastructure in AWS, a common need is to reference something else in your account.

To achieve this you need to return an `Output` in the referenced stack then when translating the referencing stack pass the name of the stack as one of the -s arguments.

    Note: If you need an output from a stack in another region simply prefix the stack name with region:<<stack name>>

Here is a contrived example where we create bucket in us-east-1 and reference its ARN in eu-west-1.

#### Stack A (in us-east-1) Deployed as my-stack-a

```typescript
const template = await AwsLoader.register('s3').load();
export default template.create().build(aws => {
  const bucket = aws.s3.bucket({
    bucketName: 'my-bucket-in-stack-a'
  });

  return {
    outputs: {
      'MyBucketInStackA': stackOutput(bucket.attributes.Arn)
    }
  }
})
```

#### Stack B (in eu-west-1)

```typescript
const template = await AwsLoader.register('s3').load();
export default template
  .create("my-stack-b-template.json")
  .params({
    MyBucketInStackA: { type: 'String' }
  })
  .build((aws, params) => {
  aws.s3.bucket({
    bucketName: join(params.MyBucketInStackA(), '-contrived-example')
  });
})
```


stack-b-properties.json

```json
{
  "MyBucketInStackA": {
    "envName": "MyBucketInStackA"
  }
}
```

Command to deploy:

```shell
npx  @hexlabs/cloudformation-ts translate my-stack-b-template.ts
npx @hexlabs/cloudformation-ts deploy -r eu-west-1 -s us-east-1:my-stack-a -- my-stack-b my-stack-b-template.json
```