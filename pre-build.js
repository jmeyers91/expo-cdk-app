const fs = require("fs");
const easConfig = require("./eas.json");

const updatedEasConfig = {
  ...easConfig,
  build: Object.fromEntries(
    Object.entries(easConfig.build).map(([key, value]) => [
      key,
      {
        ...value,
        env: {
          ...value.env,
          CODEBUILD_RESOLVED_SOURCE_VERSION:
            process.env.CODEBUILD_RESOLVED_SOURCE_VERSION,
        },
      },
    ])
  ),
};

fs.writeFile("./app.json", JSON.stringify(updatedEasConfig, null, 2));
