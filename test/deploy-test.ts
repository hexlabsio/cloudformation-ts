
import {Template} from "../src/kloudformation/kloudformation";

Template.createWithParams({
  TestParam: { type: 'String' }
}, (aws, params) => {
  
  aws.snsTopic({topicName: params.TestParam()});
})

Template.createWithParams({ABC: { type: 'String' }},
(aws, params) => {
    const b = aws.s3Bucket({
      bucketName: params.ABC()
    })
  b.attributes.Arn
}
)

Template.create(aws => {
  aws.s3Bucket({
    bucketName: 'Jimmy'
  })
});
