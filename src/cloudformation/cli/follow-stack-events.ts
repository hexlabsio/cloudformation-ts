import { CloudFormation, StackEvent } from '@aws-sdk/client-cloudformation';
import chalk from 'chalk';
const terminalStatuses = [
  "CREATE_COMPLETE",
  "CREATE_FAILED",
  "DELETE_COMPLETE",
  "DELETE_FAILED",
  "ROLLBACK_COMPLETE",
  "ROLLBACK_FAILED",
  "UPDATE_COMPLETE",
  "UPDATE_ROLLBACK_COMPLETE",
  "UPDATE_ROLLBACK_FAILED",
];
const badStatuses = [
  "CREATE_FAILED",
  "DELETE_FAILED",
  "ROLLBACK_COMPLETE",
  "ROLLBACK_FAILED",
  "UPDATE_ROLLBACK_COMPLETE",
  "UPDATE_ROLLBACK_FAILED",
  "UPDATE_ROLLBACK_IN_PROGRESS",
  "DELETE_COMPLETE",
];
export const successStatuses = ["CREATE_COMPLETE", "UPDATE_COMPLETE"];
export const continuableStatuses = [
  ...successStatuses,
  "UPDATE_ROLLBACK_COMPLETE",
  "ROLLBACK_COMPLETE",
  "DELETE_COMPLETE",
];

async function wait(milliseconds: number = 300): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function stackEvents(
  cf: CloudFormation,
  name: string,
  start: string
): Promise<StackEvent[]> {
  const events = (await cf.describeStackEvents({ StackName: name }))
    .StackEvents;
  return (
    events
      ?.sort((a, b) =>
        a.Timestamp!.toString().localeCompare(b.Timestamp!.toString())
      )
      .filter((e) => e.Timestamp!.toISOString() > start) || []
  );
}


async function getInitialEvents(
  cf: CloudFormation,
  name: string,
  start: string
) {
  let events: StackEvent[] = [];
  while (events.length === 0) {
    await wait();
    const next = await stackEvents(cf, name, start);
    events.forEach((ev) => console.log(ev));
    const startingPoint = next
      .reverse()
      .find(
        (ev) =>
          ev.ResourceType === "AWS::CloudFormation::Stack" &&
          !terminalStatuses.includes(ev.ResourceStatus!)
      );
    if (startingPoint) {
      events = next.slice(
        events.findIndex((ev) => ev.EventId === startingPoint!.EventId)
      );
    }
  }
  return events;
}
export async function followStackEvents(
  cf: CloudFormation,
  name: string,
  success: string[],
  start: string
): Promise<boolean> {
  let events = await getInitialEvents(cf, name, start);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    events.forEach(display);
    if (
      events.find(
        (it) =>
          it.ResourceType === "AWS::CloudFormation::Stack" &&
          terminalStatuses.includes(it.ResourceStatus!)
      )
    ) {
      return !!events.find(
        (it) =>
          it.ResourceType === "AWS::CloudFormation::Stack" &&
          success.includes(it.ResourceStatus!)
      );
    }
    await wait(5000);
    if (events.length > 0) start = events.pop()!.Timestamp!.toISOString();
    events = await stackEvents(cf, name, start);
  }
}

function display(e: StackEvent) {
  const color = badStatuses.includes(e.ResourceStatus!)
    ? chalk.red
    : successStatuses.includes(e.ResourceStatus!)
      ? chalk.green
      : chalk.blue;

  console.log(
    color(
      `${e.ResourceStatus?.padEnd(27)} ${e.LogicalResourceId} ${
        e.ResourceType
      } ${e.PhysicalResourceId} ${e.ResourceStatusReason || ""}`
    )
  );
}
