##!/bin/bash
# Create the servers

echo "===============COMPOSE UP=================="

sudo docker compose down -v --remove-orphans

sudo docker compose up -d

echo "==========================================="

# setup the config servers

echo "===============RSCONFIG INIT=================="

sudo docker exec -it DC1S1Config1 mongosh --eval "rs.initiate({
 _id: \"cfgrs\",
 configsvr: true,
 members: [
   {_id: 0, host: \"DC1S1Config1\"},
   {_id: 1, host: \"DC2S1Config2\"},
   {_id: 2, host: \"DC3S1Config3\"}
 ]
})"

sudo docker exec -it DC1S1Config1 mongosh --eval "rs.status()"

echo "=============================================="

# setup the shard servers

echo "=================RSSHARD INIT================="

sudo docker exec -it DC1S3Shard1 mongosh --eval "rs.initiate({
 _id: \"shard1rs\",
 members: [
   {_id: 0, host: \"DC1S3Shard1\"},
   {_id: 1, host: \"DC2S3Shard1\"},
   {_id: 2, host: \"DC3S3Shard1\"}
 ]
})"

sudo docker exec -it DC1S4Shard2 mongosh --eval "rs.initiate({
 _id: \"shard2rs\",
 members: [
   {_id: 0, host: \"DC1S4Shard2\"},
   {_id: 1, host: \"DC2S4Shard2\"},
   {_id: 2, host: \"DC3S4Shard2\"}
 ]
})"

sudo docker exec -it DC1S5Shard3 mongosh --eval "rs.initiate({
 _id: \"shard3rs\",
 members: [
   {_id: 0, host: \"DC1S5Shard3\"},
   {_id: 1, host: \"DC2S5Shard3\"},
   {_id: 2, host: \"DC3S5Shard3\"}
 ]
})"


sudo docker exec -it DC1S3Shard1 mongosh --eval "rs.status()"

echo "=============================================="


# setup the  mongos server

echo "=================ADD SHARDS==================="

# wait for the servers to setup
echo "Waiting for the servers to setup..."
s=0
i=1
sp="/-\|"
echo -n ' '
while true
do
    printf "\b${sp:i++%${#sp}:1}"
    sleep 0.1
    s=$((s + 1))
    if [ $s -eq 150 ]
    then
        break
    fi
done

sudo docker exec -it DC1S2Mongos1 mongosh --eval "sh.addShard(\"shard1rs/DC1S3Shard1:27017,DC2S3Shard1:27017,DC3S3Shard1:27017\")"
sudo docker exec -it DC1S2Mongos1 mongosh --eval "sh.addShard(\"shard2rs/DC1S4Shard2:27017,DC2S4Shard2:27017,DC3S4Shard2:27017\")"
sudo docker exec -it DC1S2Mongos1 mongosh --eval "sh.addShard(\"shard3rs/DC1S5Shard3:27017,DC2S5Shard3:27017,DC3S5Shard3:27017\")"
