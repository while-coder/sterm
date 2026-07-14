# SFTP File Management

The SFTP panel shares the active SSH connection, so no second login is required.

## Browse and manage files

Use the toolbar, context menu, or long press to:

- Browse directories and jump to the home directory
- Create files and folders
- Rename or delete one or several items
- Change Unix permissions such as `644` or `755`
- Follow the terminal's current directory when the remote shell reports it

## Upload and download

STerm supports individual files, multiple selections, and complete directories. Files dropped onto the SFTP panel are uploaded to the directory that was active when the transfer was queued.

Transfers run through a shared queue with a configurable parallel limit. The transfer panel shows progress and can be filtered to the current session.

## Resume and retry

With **Resume transfers** enabled, incomplete local downloads and remote uploads are preserved. Retrying continues from the existing byte count when the source size still makes that safe.

Completed files in a resumed directory transfer are skipped. Disable resume when you intentionally need to replace an existing file with different content of the same size.

## View and edit text files

Small text files open in the built-in viewer with syntax highlighting for common formats such as JSON, Markdown, Python, YAML, JavaScript, and TypeScript. Save writes the edited content back to the remote file. Larger or binary files can be opened with the system default application after download.

