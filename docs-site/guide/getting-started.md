# Getting Started

STerm is a cross-platform SSH and SFTP client for people who want a focused remote workspace instead of a collection of separate tools. A connection opens into a terminal with optional SFTP and AI panels, while tabs and split view keep several machines available at once.

## Install

Download the latest build from [GitHub Releases](https://github.com/while-coder/sterm/releases).

- **Windows:** NSIS installer
- **macOS:** DMG or app bundle
- **Linux:** AppImage or DEB
- **Android:** APK from the release assets

The desktop app can check for updates from its About page and will notify you when a new version is available.

## First launch

1. Create a master password. STerm uses it to encrypt your saved connection list locally.
2. Select **New Connection**.
3. Enter a display name, host, port, username, and authentication method.
4. Choose **Save and Connect**.
5. On the first connection, compare the displayed host fingerprint with the value provided by your server administrator before saving it.

Passwords and key passphrases are only retained when **Remember password / passphrase** is enabled.

## Your workspace

Each tab has its own terminal, SFTP browser, AI conversation, and panel layout. Use the top bar to split two sessions side by side or broadcast keyboard input to all connected tabs. Broadcast mode always asks for confirmation before it is enabled.

STerm can restore saved tabs on the next launch. Connections without a saved password are skipped so the app does not open unusable password prompts in the background.

## Next steps

- Configure authentication, jump hosts, proxies, and forwarding in [SSH and Sessions](./ssh).
- Transfer and edit remote files in [SFTP File Management](./sftp).
- Connect your model provider in [AI Terminal Assistant](./ai).
- Learn how local encryption and multi-provider configuration sync work in [Security and Sync](./security-sync).
