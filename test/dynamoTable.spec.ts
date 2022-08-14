import { Template } from "../src/kloudformation/kloudformation";
import { dynamoTable } from "../src/kloudformation/modules/dynamo";
import { defineTable } from "@hexlabs/dynamo-ts";

describe("dynamoTable module", () => {
  const tableDefinition = defineTable(
    {
      hash: "string",
      text: "string?",
      obj: { optional: true, object: { abc: "string", def: "number?" } },
      arr: { optional: true, array: { object: { ghi: "number?" } } },
      jkl: "number?",
    },
    "hash",
    "text",
    {
      index: { partitionKey: "hash", sortKey: "jkl" },
    }
  );

  it("should correctly render a dynamo-ts table definition", () => {
    const output = Template.create((aws) => {
      dynamoTable(aws, tableDefinition, "dummyTable", {
        tags: [{ key: "tag-key", value: "tag-value" }],
        billingMode: "PAY_PER_REQUEST",
      });
    }, undefined);
    expect(output).toEqual({
      outputs: undefined,
      template: {
        Outputs: undefined,
        Parameters: {},
        Resources: {
          DummyTable: {
            Type: "AWS::DynamoDB::Table",
            Properties: {
              Tags: [
                {
                  Key: "tag-key",
                  Value: "tag-value",
                },
              ],
              BillingMode: "PAY_PER_REQUEST",
              TableName: "dummyTable",
              KeySchema: [
                {
                  KeyType: "HASH",
                  AttributeName: "hash",
                },
                {
                  KeyType: "RANGE",
                  AttributeName: "text",
                },
              ],
              AttributeDefinitions: [
                {
                  AttributeName: "hash",
                  AttributeType: "S",
                },
                {
                  AttributeName: "text",
                  AttributeType: "S",
                },
                {
                  AttributeName: "jkl",
                  AttributeType: "N",
                },
              ],
              GlobalSecondaryIndexes: [
                {
                  IndexName: "index",
                  KeySchema: [
                    {
                      KeyType: "HASH",
                      AttributeName: "hash",
                    },
                    {
                      KeyType: "RANGE",
                      AttributeName: "jkl",
                    },
                  ],
                  Projection: {
                    ProjectionType: "ALL",
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
});
