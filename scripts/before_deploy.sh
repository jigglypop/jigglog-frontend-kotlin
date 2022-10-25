echo "before deploy 시작" >> /home/ubuntu/log.txt

cd /home/ubuntu >> /home/ubuntu/log.txt

pm2 delete all >> /home/ubuntu/log.txt

echo "이전 pm2 삭제" >> /home/ubuntu/log.txt

rm -rf jigglognext >> /home/ubuntu/log.txt

echo "이전 폴더 삭제" >> /home/ubuntu/log.txt

echo "before deploy 완료" >> /home/ubuntu/log.txt