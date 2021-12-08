```bash
npx react-native init testsentryapp --template react-native-template-typescript --npm

cd testsentryapp/ios

arch -x86_64 pod install --repo-update	# Maybe M1 is related

npm install --save @sentry/react-native

npx @sentry/wizard -i reactNative -p ios android

npm start
```

open xcode, try to build
