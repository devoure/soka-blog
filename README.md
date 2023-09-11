# :soccer: Blog
> :bulb: **Project** 1/4
## 💬 Description
> This is a full stack project that is build with django and react
![desc](./images/hrms.png)
## 📜 More
> Database
  1. The app;ication is using Postgres database running on a docker container
     > The database is connected to the app using the port 5432
     <details>
      <summary>Postman screenshot</summary>
      
      ![database](./screenshots/db.png)
     </details>

> Backend
  1. API endpoint to get the posts added by author
     > A blog API that gets users posts that is to be promped by the frontend
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get all posts](./screenshots/backend_getposts.png)
     </details>
  1. API endpoint to get one post
     > A blog API that gets a specific post by passing id
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get one post](./screenshots/backend_getpost.png)
     </details>
  1. API endpoint to get comments
     > A blog API endpoint that gets all comments for all posts
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get all comments](./screenshots/backend_getcomments.png)
     </details>
  1. API endpoint to get one comment
     > A blog API endpoint that gets one comment for a post by passing id
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get one comment](./screenshots/backend_getcomment.png)
     </details>
  1. API endpoint to add comment
     > A blog API endpoint that adds a comment for a post
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman add comment](./screenshots/backend_addcomment.png)
     </details>
  1. API endpoint to get posts by tags
     > A blog API endpoint that gets posts that much a tag passed by the url
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get posts by tag](./screenshots/backend_taggedposts.png)
     </details>
  1. API endpoint to get simillar posts
     > A blog API endpoint that gets simillar posts from one selected
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get simillar](./screenshots/backend_simillar.png)
     </details>
  1. API endpoint to search for text in the blog 
     > A blog API endpoint that gets a search in the title and body of the Posts saved in the database
     <details>
      <summary>Postman screenshot</summary>
      
      ![postman get search](./screenshots/backend_search.png)
     </details>


## 🔧 Code Setup
   1. Clone the repo
        ```bash
            git clone https://github.com/devoure/soka-blog

        ```
   1. Move into the project file
        ```bash
            cd soka-blog

        ```
   1. Setup Docker container for postgres
        ```bash
            systemctl start docker
            docker-compose -f ./docker/postgresConfig.yml up
        ```
   1. Setup Backend
        ```bash
            cd backend/blog/
            python manage.py makemigrations
            python manage.py migrate
            python manage.py create superuser

        ```

## 💻🏃‍♂️ Running Code Snippet
   1. Run Backend code
        ```bash
            cd backend/blog/
            python manage.py runserver

        ```
   1. Run Frontend Code
        ```bash
            ##

        ```






