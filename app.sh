NODE_ENV=development
cd Frontend
npm install
npm run build
cd ..
cd Backend
npm install
pm2 delete all
pm2 unstartup
pm2 start tmpServer.js
pm2 save
pm2 startup