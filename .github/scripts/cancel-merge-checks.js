module.exports = ({ github, context }) => {
    // Retrieve the previous commit's SHA from environment variables
    const { SHA_BEFORE } = process.env;

    // Retrieve the check runs for the previous commit
    const checkRuns = await github.request('GET /repos/BitGrater/gha-playground/commits/{ref}/check-runs', {
        ref: SHA_BEFORE
    });

    // No check-runs found for the previous commit SHA
    if (checkRuns?.data?.length < 1) {
        return 0;
    }

    // Collect all check-runs for the previous commit SHA's which
    // aren't completed yet
    toCancel = checkRuns?.data?.filter(run => run.status !== 'completed').map(run => run.id)

    // Cancel all the in progress check runs for previous commits of
    // the same Pull Request
    
}