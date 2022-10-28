echo "after deploy 시작" >> /home/ubuntu/log.txt

cd /home/ubuntu/ >> /home/ubuntu/log.txt

cp -r product ./jigglognext/dist/public/ >> /home/ubuntu/log.txt

echo "product 이미지 copy 완료" >> /home/ubuntu/log.txt

cd /home/ubuntu/jigglognext >> /home/ubuntu/log.txt

pm2 start 'yarn start:next' >> /home/ubuntu/log.txt

echo "pm2 프론트엔드 실행완료" >> /home/ubuntu/log.txt

# echo "정적 sitemap 생성중.."
# node ./scripts/sitemap.js

# echo "정적 sitemap 생성 완료!"

# Google 서치콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=http://release.jigglog.com/sitemap.xml

echo "Google에 sitemap 핑 전송 4"