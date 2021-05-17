
1.  ** Run locally in development mode.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    docker-compose up --build
    ```

1.  **Run locally in production mode.**

    Comment line 13 in docker-compose.prod.yml "- ./nginx/default.conf:/etc/nginx/sites-available/default" then

    ```shell
    docker-compose -f docker-compose.prod.yml up -d --build
    
    ```
    
  1.  **Renew ssl certificate.**

  In project directory run

  ```shell
  docker exec -it noclegi bash
  cerbot --nginx

  ```
  
  1.  **Recreate docker container .**

  Comment line 13 in docker-compose.prod.yml "- ./nginx/default.conf:/etc/nginx/sites-available/default" then

  ```shell
  docker-compose -f docker-compose.prod.yml up -d --build
  docker exec -it noclegi bash
  cerbot --nginx

  ```
  Uncomment line 13 in docker-compose.prod.yml "- ./nginx/default.conf:/etc/nginx/sites-available/default" then
  
    ```shell
  docker-compose -f docker-compose.prod.yml up -d --build

  ```
    
