cd ./packages/ui
yarn build:static
npx now alias --token=$NOW_TOKEN $(now ./out --static --no-clipboard --token=$NOW_TOKEN --public) code-challenges.poffm.now.sh
