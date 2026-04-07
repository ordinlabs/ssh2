# Ordin Fork of ssh2

This is a maintained fork of [mscdex/ssh2](https://github.com/mscdex/ssh2) published as `@ordinlabs/ssh2`.

## Versioning

We use semver prerelease tags based on the upstream version:

```
<upstream-version>-ordin.<fork-revision>
```

For example: `1.17.0-ordin.1`, `1.17.0-ordin.2`, etc.

- The base version (`1.17.0`) tracks which upstream release we're based on.
- The `ordin.N` suffix increments with each fork release.
- When rebasing onto a new upstream version, reset the suffix: `1.18.0-ordin.1`.

## Publishing

1. Update the version in `package.json`:
   ```bash
   npm version 1.17.0-ordin.2 --no-git-tag-version
   ```

2. Commit and tag:
   ```bash
   git add package.json
   git commit -m "chore: release 1.17.0-ordin.2"
   git tag v1.17.0-ordin.2
   ```

3. Publish to npm:
   ```bash
   npm publish --access public --tag ordin-master
   ```
   The `--tag ordin-master` is required for prerelease versions. This prevents the prerelease from becoming the `latest` tag on npm. Users install with:
   ```bash
   npm install @ordinlabs/ssh2@ordin-master
   ```

## Merging Upstream Changes

1. Add upstream remote if not already present:
   ```bash
   git remote add upstream https://github.com/mscdex/ssh2.git
   ```

2. Fetch and merge:
   ```bash
   git fetch upstream
   git merge upstream/master
   ```

3. Resolve any conflicts, update the base version in `package.json`, and publish a new fork release.

## Fork Changes

Changes in this fork beyond upstream:

- Server-side `conn.openssh_authAgent()` for agent forwarding
- SFTP `destroy()` sends `exit-status` and `EOF` before channel close
- `disconnect()` supports custom reason, message, and language parameters
- TypeScript type declarations
