#!/usr/bin/env node

import { program } from "commander";
import { Options } from "./interfaces";
// import { update } from "./scripts";
const version = "VERSION";

/**
 * action
 * @description the vite-lib-starter runner
 * @param {Options} Record}
 */
export async function action(options: Options = {}): Promise<void> {
  try {
    if (options?.isTestingCLI) console.info({ options });

    console.log({ options });
  } catch (err) {
    console.error(err);
  }
}

program
  .version(version)
  .description("vite-lib-starter is a template repo for quickly creating a vite library with useful features")
  .option("-t, --isTestingCLI", "enables CLI testing, no scripts are run")
  .action(action)
  .parse(process.argv);

export { program };
