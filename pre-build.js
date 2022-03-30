/**
 * This script injects environment variables from the AWS Codebuild environment into
 * the EAS config which makes them available during the Expo build that gets run in EAS.
 *
 * Add additional fields to `injectedEnv` as needed.
 */

const fs = require("fs");
const path = require("path");

const easConfigPath = path.resolve(__dirname, "eas.json");
const easConfig = JSON.parse(fs.readFileSync(easConfigPath, "utf-8"));
const injectedEnv = {
  /**
   * The git commit id that triggered codebuild.
   * https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-env-vars.html#CODEBUILD_RESOLVED_SOURCE_VERSION
   */
  CODEBUILD_RESOLVED_SOURCE_VERSION:
    process.env.CODEBUILD_RESOLVED_SOURCE_VERSION,
};

for (const buildProfile of Object.values(easConfig.build)) {
  buildProfile.env = { ...buildProfile.env, ...injectedEnv };
}

fs.writeFileSync(easConfigPath, JSON.stringify(easConfig, null, 2));

console.log(`Passing env vars to EAS for Expo build`, injectedEnv);
