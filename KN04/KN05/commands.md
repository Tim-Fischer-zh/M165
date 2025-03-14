![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-4.png)
![alt text](image-9.png)
![alt text](image-10.png)

```bash
sudo mongosh --authenticationDatabase "admin" -u "admin" -p "admin"

use admin
db.grantRolesToUser("admin", [ { role: "dbAdminAnyDatabase", db: "admin" } ])
use PanzerDB
db.dropDatabase()







mongodump --host 98.82.226.165 --port 27017 --username admin --password admin --authenticationDatabase admin --db PanzerDB --out /tmp/backupPanzerDB
mongorestore --host 98.82.226.165 --port 27017 --username admin --password admin --authenticationDatabase admin --db PanzerDB /tmp/backupPanzerDB/PanzerDB
````




