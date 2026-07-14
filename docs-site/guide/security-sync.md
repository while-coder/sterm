# Security and Sync

## Local protection

STerm encrypts the saved connection list with your master password. The master password and AI API key are kept through the platform credential store. Connection passwords and key passphrases are included only when you explicitly choose to remember them.

Changing the master password re-encrypts the local connection data. Keep the new password safe: STerm cannot recover encrypted data without it.

## Server identity

Host fingerprints are stored separately in STerm's Known Hosts file. First connections and changed keys always require a decision. A changed fingerprint should be verified with the server owner before replacement.

## Configuration sync

Configuration sync is available in STerm Free. The encrypted payload can be stored through:

- GitHub Gist
- Gitee Gist
- GitLab Snippet (GitLab.com or self-managed)
- Jianguoyun WebDAV

The payload can carry:

- Saved connections and deletion records
- AI provider settings and command snippets
- An encrypted copy of the AI API key
- Private key content when a saved key must be restored on another device

Layout, local shortcuts, cache directories, and other device-specific preferences remain local.

Choose a provider in **Settings → Sync and Security** and follow its credential instructions. GitHub, Gitee, and GitLab automatically reuse an existing STerm snippet or create one. GitLab supports both GitLab.com and self-managed instances. Jianguoyun stores the encrypted payload at `STerm/connections.enc`. Every device must use the same master password to decrypt the data.

## Import and export

The connection list can also be exported as an encrypted STerm file and imported on another device. Review import warnings: a private key that cannot be read or restored may require manual selection on the destination device.

Never share an exported connection file, master password, sync token, WebDAV app password, or license key in public issue reports.
