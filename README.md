# TailwindCSS use using single css file

## compile commands

```
npx tailwindcss -c ./tailwind.config.js -i input.css -o global.css

// add first and last some character

npx tailwindcss -c ./tailwind.config.js -i input.css -o global.css && sed -i '' '1 i \
:global {
' global.css && echo "}" >> global.css

```
