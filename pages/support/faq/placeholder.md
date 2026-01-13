# What do {{user}} and {{char}} mean?

`{{user}}` and `{{char}}` are Handlebar variables. You can read more about them [here](https://handlebarsjs.com/guide/#what-is-handlebars), but in simple terms, `{{user}}` is a placeholder for your username and `{{char}}` is a placeholder for your prompt's name.

For example, if you include `{{char}}` in your character prompt named Jason, all instances of `{{char}}` will be replaced by 'Jason' before the AI even sees it.

Therefore, `{{char}}'s name is Jason` will only show up as `Jason's name is Jason`, and the AI will never *actually* see the word `{{char}}`.

Instances of `{{user}}` are handled the same way - let's say your username is 'Lia'. The sentence `{{user}}'s favourite food is lettuce` will be changed, and *then* sent to the AI as `Lia's favourite food is lettuce`.

However, if a *different* user (let's call them Wyatt) tries the *same* prompt, `{{user}}'s favourite food is lettuce` will instead be changed and sent to the AI as `Wyatt's favourite food is lettuce`. Essentially, `{{user}}` is replaced with the username of whoever is using the prompt.