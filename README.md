# README.md

## Access Database

To access the database, follow these steps:

1. **Install Docker Application**
2. **clone this repository**
3. **run docker compose**
4. **This repository is the solution of the assignment**
5. **Some resources**

6. **Plsql Cheat Sheet:**
   You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

7. **Know the Container ID:**
   To find out the container ID, execute the following command:
   ```bash
   docker ps
   ```

8. **Execute Container:**
   Once you have the container ID, you can execute the container using the following command:
   ```bash
   docker exec -it container_ID psql -U postgres
   ```
   Replace `container_ID` with the actual ID of the container you want to execute.
