# AI Terminal Assistant

The AI panel belongs to one SSH session. It can answer questions, inspect the cached remote environment, and—with your approval—run commands in that session's interactive shell.

## Providers

Configure the provider, base URL, model, and API key in **Settings → AI**. STerm supports:

- OpenAI-compatible Chat Completions
- OpenAI Responses API
- Anthropic Messages API
- Ollama

The API key is stored through the operating system credential store rather than in the normal settings file.

## Attach terminal context

Before sending a question, choose one of these optional context buttons:

- **Selection:** attach text currently selected in the terminal.
- **Recent output:** attach the latest terminal output kept by the current session.

Context is attached only to that request. Terminal output is treated as data to analyze, not as instructions for the model.

## Command execution

When the model requests a shell command, STerm shows its description and exact command. Approve or reject it before execution. You can enable automatic approval in settings, but manual approval is safer for production machines.

Commands run in the real interactive session. A command such as `cd` therefore also changes the directory seen by the terminal and SFTP follow mode.

You can stop an active AI request at any time. Tool results remain visible in the conversation so the evidence behind an answer is easy to inspect.

