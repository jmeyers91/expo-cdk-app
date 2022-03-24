const fs = require("fs");
const path = require("path");

const easConfigPath = path.resolve(__dirname, "eas.json");
const easConfig = JSON.parse(fs.readFileSync(easConfigPath, "utf-8"));
const injectedEnv = {
  CODEBUILD_RESOLVED_SOURCE_VERSION:
    process.env.CODEBUILD_RESOLVED_SOURCE_VERSION,
};

const updatedEasConfig = {
  ...easConfig,
  build: Object.fromEntries(
    Object.entries(easConfig.build).map(([key, value]) => [
      key,
      {
        ...value,
        env: { ...value.env, ...injectedEnv },
      },
    ])
  ),
};

fs.writeFileSync("./eas.json", JSON.stringify(updatedEasConfig, null, 2));

console.log(`Injected Codebuild env into EAS env`, injectedEnv);
