# link new image from another image of python
FROM python:3.8-alpine

# Add scripts to the path of the running container
# Allows us to access or run scripts without adding path
ENV PATH="/scripts:${PATH}"

# COPY the requirements.txt from host machine to the container
COPY ./blog/requirements.txt /requirements.txt

# Add packages in a temp file
# apk is the alpine package manager
# --update package repo will be updated
# --no-cache not cache anything on the OS
# --virtual add virtual dependencies into a temp file
# Add dependencies to run uwsgi server
RUN apk add --update --no-cache --virtual .tmp gcc libc-dev linux-header

# Install requirements
RUN pip install -r /requirements.txt

# Remove dependencies to make container more lightweight
RUN apk del .tmp

RUN mkdir /backend
# COPY files in the host machine to the container
COPY ./blog /backend

# Change into the backend directory
WORKDIR /backend
# Copy scripts into the container
COPY ./scripts /scripts

# Add executable permission to all scripts
RUN CHMOD +x /scripts/*

# Create all sub directories needed
RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

# Create new user
RUN add user

# Set owner of the directory to user
RUN chown -R user:user /vol

# Give new user full access and other group read access only
RUN chmod -R 755 /vol/web

# switch to new user
USER user

CMD ["entrypoint.sh"]

