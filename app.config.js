export default ({ config }) => {
  /**
   * This env var gets passed from codebuild to EAS using the `pre-build.js` script.
   */
  const buildCommitId = process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ?? "";

  return {
    ...config,
    extra: {
      buildCommitId,
    },
  };
};
