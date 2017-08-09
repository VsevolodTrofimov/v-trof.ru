$NODE_ENV=development
cd Frontend
yarn
yarn build
cd ..
cd Backend
yarn
pm2 delete all
pm2 start tmpServer.js
pm2 save
pm2 startup