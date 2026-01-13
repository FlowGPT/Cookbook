# Why does my prompt keep forgetting things?

Like humans, prompts have a limited 'memory'. This memory is the 'Context' you see beneath each model's name, measured in tokens. For a visual representation of tokens, or a way to measure your prompt's length, you can visit [OpenAI's tokenzier](https://platform.openai.com/tokenizer).

When writing a prompt, it is generally recommended to use up no more than half of your chosen model's context (so, if you were using a model with a context of 4k, you shouldn't use up more than 2k for just your prompt). This is to make room for your chat history with the prompt, which is added onto the prompt's information. As your chat history becomes longer, the *earlier* chat history will be removed to make room for your most recent replies.

Your prompt's information, however, will remain *permanent* in the context - this includes Character Prompts' `Scenario` and `Example Conversations` sections.