export default ({ config }) => {
  const buildCommitId = process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ?? "";
  console.log("Building commit", buildCommitId, config);
  return {
    ...config,
    extra: {
      buildCommitId,
    },
  };
};
