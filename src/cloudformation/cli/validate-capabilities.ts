import chalk from 'chalk';

export function validateCapabilities(capabilities: string[]) {
  const valid = [
    "CAPABILITY_IAM",
    "CAPABILITY_NAMED_IAM",
    "CAPABILITY_AUTO_EXPAND",
  ];
  if (!capabilities || capabilities.length === 0) {
    console.error(chalk.red("At least one capability must be provided"));
    process.exit(1);
  }
  const errors = [
    ...valid
      .map((it) => {
        if (capabilities.filter((c) => c === it).length > 1) {
          return `${it} can only appear once`;
        }
        return null;
      })
      .filter((it) => !!it),
    ...capabilities
      .filter((it) => !valid.includes(it))
      .map((it) => `${it} is not a valid capability`),
  ];
  if (errors.length > 0) {
    errors.forEach((it) => console.error(chalk.red(it)));
    process.exit(1);
  }
}
