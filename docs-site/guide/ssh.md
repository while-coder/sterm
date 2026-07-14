# SSH and Sessions

## Authentication

STerm supports password, private key, SSH Agent, and keyboard-interactive authentication. Keyboard-interactive mode displays the server's questions, making it suitable for OTP codes and other challenge-response flows.

Private key paths may use `~`. On Windows, SSH Agent mode tries the OpenSSH agent first and falls back to Pageant when available.

## Host verification

STerm keeps its own Known Hosts file. A new host must be approved before the connection continues. If a saved host key changes, STerm shows both the old and new fingerprints and requires an explicit replacement confirmation.

Treat an unexpected key change as a security warning. Verify it through another trusted channel before continuing.

## Jump hosts and proxies

In **Connection and reconnect**, choose another saved connection as a jump host. STerm authenticates to that machine first and opens the target SSH connection through it.

You can also route the initial connection through:

- HTTP CONNECT proxy
- SOCKS5 proxy
- Optional proxy username and password

When a jump host and proxy are both configured, the proxy is used to reach the jump host.

## Port forwarding

A connection can start multiple forwarding rules automatically:

- **Local:** listen on this device and reach a target through the SSH server.
- **Remote:** listen on the SSH server and forward incoming traffic to a target reachable from this device.
- **Dynamic SOCKS5:** expose a local SOCKS5 endpoint backed by the SSH connection.

Forwarding listeners are closed with the session. Avoid public bind addresses such as `0.0.0.0` unless other devices genuinely need access.

## Reliability

Set a connection timeout and Keepalive interval per machine. When a previously connected session drops, automatic reconnect uses increasing delays up to 30 seconds. The tab stays open, and you can trigger an immediate reconnect from the status bar.

## Terminal tools

- Press `Ctrl+F` or select **Search** to find text in the terminal buffer.
- Select **Export log** to save the current scrollback as a text file.
- Multi-line paste confirmation helps catch commands copied from an untrusted source.
- Split view displays two live sessions side by side.
- Broadcast mode sends typed terminal input to every connected tab.
- Saved command snippets are available from the **Commands** menu.
- A per-connection login script can prepare the directory or environment after every successful connection.

