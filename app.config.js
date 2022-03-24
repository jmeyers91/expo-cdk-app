export default ({ config }) => ({
  ...config,
  extra: {
    buildCommitId: process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ?? "",
  },
});
